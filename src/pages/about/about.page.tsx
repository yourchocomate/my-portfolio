import clsx from 'clsx';
import SVG from '@/components/SVG';
import { Suspense, lazy, useEffect, useState } from 'react';
import { INFO_TABS } from '@/constants/about';
import { SnippetShowCase, Tabs } from '@/components/about';
import { IInfoTab, IInfoTabItemFile } from '@/components/about';
import BreadCrumb from '@/components/BreadCrumb';
import { useHorizontalScroll } from '@/hooks/ui/useHorizontalScroll';
import { EditorLabel } from '@/components/ui';
import { ContactAccordion } from '@/components/contact';
import { Column, Div, Row } from '@/components/ui/elements';

const CodeMirror = lazy(() =>
    import('@/components/codemirror').then((module) => ({
        default: module.CodeMirror,
    }))
);

const AboutPage = () => {
    const [isDesktop, setDesktop] = useState(true);
    const [tab, setTab] = useState<IInfoTab>(INFO_TABS[1]);
    const [openedFiles, setOpenedFiles] = useState<IInfoTabItemFile[]>([]);
    const [openedFile, setOpenedFile] = useState<IInfoTabItemFile | null>(null);

    const horizontalScrollRef = useHorizontalScroll<HTMLDivElement>();

    const closeOpened = (file: IInfoTabItemFile) => {
        setOpenedFiles(openedFiles.filter((x) => x.uuid !== file.uuid));
        setOpenedFile(null);
    };

    useEffect(() => {
        const resize = new ResizeObserver((entries) => {
            if (entries[0].target.clientWidth >= 1024) setDesktop(true);
            else setDesktop(false);
        });
        resize.observe(window.document.body);
        return () => {
            resize.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!openedFile) return;
        if (openedFiles.find((x) => x.uuid === openedFile.uuid)) return;
        setOpenedFiles([openedFile, ...openedFiles]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openedFile]);

    return (
        <Column className="lg:flex-row size-full overflow-x-hidden overflow-y-scroll lg:overflow-hidden no-scrollbar">
            <BreadCrumb className="lg:hidden" />
            <Row className="left-sidebar-about border-r border-stroke-primary lg:h-full">
                <Column
                    centerX
                    className="hidden lg:flex w-12 h-full gap-6 border-r border-stroke-primary pt-6"
                >
                    {INFO_TABS.map((item, index) => (
                        <SVG
                            key={index}
                            name={item.icon}
                            className={clsx(
                                'size-4',
                                item.id !== tab?.id && 'opacity-50'
                            )}
                            onClick={() => setTab(item)}
                        />
                    ))}
                </Column>
                <Column className="w-full flex-1 gap-1 lg:gap-0">
                    {tab &&
                        (isDesktop ? (
                            <Tabs
                                openedFile={openedFile}
                                tab={tab}
                                setOpenedFile={setOpenedFile}
                            />
                        ) : (
                            INFO_TABS.map((tab, index) => (
                                <Tabs
                                    key={index}
                                    openedFile={openedFile}
                                    tab={tab}
                                    setOpenedFile={setOpenedFile}
                                />
                            ))
                        ))}
                    <ContactAccordion triggerClass="border-t" />
                </Column>
            </Row>
            <Column className="lg:flex-row flex-1 mt-6 lg:mt-0">
                <Column className="lg:w-1/2 lg:border-r border-stroke-primary">
                    <Row
                        centerY
                        ref={horizontalScrollRef}
                        className="hidden lg:flex w-full py-[0.075rem] lg:border-b border-stroke-primary lg:overflow-x-scroll overflow-y-hidden no-scrollbar"
                    >
                        {openedFiles.map((file, index) => (
                            <EditorLabel
                                key={index}
                                active={file.uuid === openedFile?.uuid}
                                onClick={() => setOpenedFile(file)}
                                onClose={() => closeOpened(file)}
                            >
                                {file.name}
                            </EditorLabel>
                        ))}
                        {!openedFile && (
                            <EditorLabel active>{tab.name}</EditorLabel>
                        )}
                    </Row>
                    <Div className="size-full p-4 overflow-x-hidden overflow-y-hidden lg:overflow-y-scroll scrollbar">
                        <Div className="mb-6 px-2 lg:hidden">
                            <span className="text-secondary-4">
                                // {tab?.name}
                            </span>
                            {openedFile && <span> / {openedFile.name}</span>}
                        </Div>
                        <Suspense fallback={'...loading'}>
                            <CodeMirror
                                lineNumbers
                                lineWrapping
                                value={openedFile?.content || tab.description}
                                lang={openedFile?.type || 'php'}
                            />
                        </Suspense>
                    </Div>
                </Column>
                <Div className="lg:w-1/2">
                    <Div className="hidden lg:flex w-full h-11 lg:border-b border-stroke-primary" />
                    <Div className="overflow-x-hidden overflow-y-scroll scrollbar size-full pb-12">
                        <SnippetShowCase />
                    </Div>
                </Div>
            </Column>
        </Column>
    );
};

export default AboutPage;
