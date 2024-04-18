/** Exports */

export { default as Div } from './Div';
export { default as Column } from './Column';
export { default as Row } from './Row';

/** Typings */

interface BasicProps {
    centerX?: boolean;
    centerY?: boolean;
    center?: boolean;
    between?: boolean;
}

export interface IDivProps extends React.HTMLProps<HTMLDivElement>, BasicProps {}
export interface IColumnProps extends React.HTMLProps<HTMLDivElement>, BasicProps {}
export interface IRowProps extends React.HTMLProps<HTMLDivElement>, BasicProps {}
