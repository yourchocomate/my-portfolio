import clsx from 'clsx';
import { AccordionProvider } from './AccordionContext';
import { IAccordionItemProps } from '.';

const AccordionItem: React.FC<IAccordionItemProps> = ({
    children,
    className,
}) => {
    return (
        <AccordionProvider>
            <div className={clsx('column', className)}>{children}</div>
        </AccordionProvider>
    );
};

export default AccordionItem;
