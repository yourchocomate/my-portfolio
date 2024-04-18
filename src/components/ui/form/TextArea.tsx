import { forwardRef } from 'react';
import { ITextAreaProps } from '.';
import clsx from 'clsx';

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
    ({ className, children, ...rest }, ref) => {
        return (
            <textarea ref={ref} className={clsx('input scrollbar', className)} {...rest}>
                {children}
            </textarea>
        );
    }
);

export default TextArea;
