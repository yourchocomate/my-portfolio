import { NavText } from '@/components/ui';
import { HtmlHTMLAttributes } from 'react';
import clsx from 'clsx';
import SVG from '@/components/SVG';
import { Row } from '../elements';
import { Text } from '../typography';

const Footer: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    className,
    ...rest
}) => {
    return (
        <footer
            {...rest}
            className={clsx(
                'w-full bg-transparent row-between items-center border-t border-stroke-primary px-4 h-[3.1rem]',
                className
            )}
        >
            <Row between centerY className="size-full">
                <Row centerY className="pr-6">
                    <Text className="text-secondary-1 text-nowrap">find me in:</Text>
                </Row>
                <Row centerY className="lg:justify-between lg:w-full h-full">
                    <Row centerY className="h-full">
                        <NavText bleft>
                            <SVG name="twitter" className="size-4" />
                        </NavText>
                        <NavText bleft bright>
                            <SVG name="facebook" className="size-4" />
                        </NavText>
                    </Row>
                    <a
                        href="https://github.com/yourchocomate"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-full"
                    >
                        <NavText bleft className="!pl-6 !pr-2">
                            <span className="row gap-2 justify-center items-center">
                                <span className="hidden lg:flex">
                                    @yourchocomate
                                </span>
                                <SVG name="github" className="size-4" />
                            </span>
                        </NavText>
                    </a>
                </Row>
            </Row>
        </footer>
    );
};

export default Footer;
