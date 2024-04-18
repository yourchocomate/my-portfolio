/** Exports */

export { default as Header } from './header/Header';
export { default as Footer } from './footer/Footer';
export { default as BaseLayout } from './BaseLayout';
export { default as NavText } from './NavText';
export { default as BlobOverlay } from './BlobOverlay';
export { default as BaseAccordion } from './BaseAccordion';
export { default as EditorLabel } from './EditorLabel';

/** Typings */

export interface IBaseAccordionProps {
    open?: boolean;
    indicator?: 'filled' | 'stroke';
    title?: React.ReactNode;
    triggerClass?: string;
    contentClass?: string;
    children?: React.ReactNode;
}

export interface IEditorFileLabelProps {
    active?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    onClose?: () => void;
}
