/** Exports */

export { default as Label } from './Label';
export { default as Input } from './Input';
export { default as TextArea } from './TextArea';

/** Typings */

export interface ILabelProps extends React.HTMLProps<HTMLLabelElement> {
    for?: string;
}
export interface IInputProps extends React.HTMLProps<HTMLInputElement> {}
export interface ITextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {}
