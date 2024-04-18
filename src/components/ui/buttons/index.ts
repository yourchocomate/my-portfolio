/** Exports */
export { default as Button } from './Button';

/** Helpers */
export const BUTTON_TYPES = {
    primary: 'bg-accent-1 rounded-base text-primary-1 hover:bg-hover-primary',
    default:
        'bg-primary-4 rounded-base text-secondary-4 hover:bg-hover-default',
    ghost: 'bg-transparent rounded-base text-secondary-4 border border-secondary-4 hover:border-secondary-4/50',
};

/** Typings */

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    default?: boolean;
    primary?: boolean;
    ghost?: boolean;
}
