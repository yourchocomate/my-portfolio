import { forwardRef } from 'react';
import { IInputProps } from '.';
import clsx from 'clsx';

const Input = forwardRef<HTMLInputElement, IInputProps>(({ className, ...rest }, ref) => {
    return (
        <input ref={ref} className={clsx("input", className)} {...rest} />
    );
});

export default Input;
