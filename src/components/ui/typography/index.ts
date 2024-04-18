/** Exports */

export { default as Text } from './Text';
export { default as Headline } from './Headline';
export { default as SubHeadline } from './SubHeadline';

/** Typings */

export interface ITextProps
    extends React.HTMLAttributes<HTMLParagraphElement> {}

export interface IHeadlineProps
    extends React.HTMLAttributes<HTMLHeadingElement> {}
