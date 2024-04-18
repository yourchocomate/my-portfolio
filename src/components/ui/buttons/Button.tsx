import clsx from 'clsx';
import { forwardRef } from 'react';
import { BUTTON_TYPES, IButtonProps } from '.';

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
    (
        { children, className, default: isDefault, primary, ghost, ...rest },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={clsx('px-3 py-[0.35rem]', className, {
                    [BUTTON_TYPES.primary]: primary,
                    [BUTTON_TYPES.default]: isDefault,
                    [BUTTON_TYPES.ghost]: ghost,
                })}
                {...rest}
            >
                {children}
            </button>
        );
    }
);

export default Button;
