/** Exports */

export { default as AccordionItem } from './AccordionItem';
export { default as AccordionTrigger } from './AccordionTrigger';
export { default as AccordionContent } from './AccordionContent';

/** Typings */

export interface IAccordionContext {
    open: boolean;
    toggle: () => void;
}

export interface IAccordionItemProps
    extends React.HTMLProps<HTMLDivElement> {}

export interface IAccordionTriggerProps
    extends React.HTMLProps<HTMLDivElement> {
    indicator?: 'filled' | 'stroke';
    open?: boolean;
}
