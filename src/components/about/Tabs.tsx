import clsx from 'clsx';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion';
import SVG from '../SVG';
import { INFO_TAB_ITEMS } from '@/constants/about';
import { useEffect, useState } from 'react';
import { IInfoTabItemFile, IInfoTabsItem, ITabsProps, getIconName } from '.';
import { BaseAccordion } from '../ui';
import { Row } from '../ui/elements';

const Tabs: React.FC<ITabsProps> = ({ tab, openedFile, setOpenedFile }) => {
    const [tabItems, setTabItems] = useState<IInfoTabsItem[]>([]);

    useEffect(() => {
        tab && setTabItems(INFO_TAB_ITEMS.filter((x) => x.tab_id === tab.id));
    }, [tab]);

    return (
        <BaseAccordion open={tab?.default} title={tab.name}>
            {tabItems.map((tab, index) => {
                if (tab.type === 'file') {
                    return (
                        <Row
                            key={index}
                            centerY
                            className={clsx('gap-3', {
                                'text-secondary-4':
                                    tab.uuid === openedFile?.uuid,
                                'my-2':
                                    index === 0 ||
                                    index === tabItems.length - 1,
                            })}
                            onClick={() =>
                                setOpenedFile(
                                    tab as unknown as IInfoTabItemFile
                                )
                            }
                        >
                            <SVG name="markdown" className="size-4" />
                            <span>{tab.name}</span>
                        </Row>
                    );
                }
                return (
                    <AccordionItem key={index}>
                        <AccordionTrigger
                            indicator="stroke"
                            className="row items-center"
                        >
                            <SVG
                                name="folder"
                                className={clsx('size-4 mr-3')}
                                style={{
                                    color: `var(--color-accent-${
                                        1 + Math.floor(Math.random() * 5)
                                    })`,
                                }}
                            />
                            <span>{tab.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-7 mt-2 column gap-2">
                            {tab.files?.map((file, i) => (
                                <Row
                                    key={i}
                                    centerY
                                    className={clsx('gap-3', {
                                        'text-secondary-4':
                                            file.uuid === openedFile?.uuid,
                                    })}
                                    onClick={() => setOpenedFile(file)}
                                >
                                    <SVG
                                        name={getIconName(file.type)}
                                        className="size-4"
                                    />
                                    <span>{file.name}</span>
                                </Row>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </BaseAccordion>
    );
};

export default Tabs;
