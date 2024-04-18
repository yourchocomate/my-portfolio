import clsx from "clsx";
import { AccordionItem, AccordionTrigger } from "./accordion"
import AccordionContent from './accordion/AccordionContent';
import { IBaseAccordionProps } from ".";

const BaseAccordion: React.FC<IBaseAccordionProps> = ({ open, title, indicator, triggerClass, contentClass, children }) => {
    return (
        <AccordionItem>
            <AccordionTrigger
                open={open}
                indicator={indicator || "filled"}
                className={clsx("h-8 lg:h-[2.75rem] w-full text-secondary-4 px-6 lg:px-4 border-b border-stroke-primary bg-stroke-primary lg:bg-inherit", triggerClass)}
            >
                {title}
            </AccordionTrigger>
            <AccordionContent className={clsx("column gap-3 my-3 px-6 lg:px-4", contentClass)}>
                {children}
            </AccordionContent>
        </AccordionItem>
    )
}

export default BaseAccordion;