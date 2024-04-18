import { forwardRef } from 'react';
import { IRowProps } from '.';
import clsx from 'clsx';

const Row = forwardRef<HTMLDivElement, IRowProps>(
    (
        { className, center, centerX, centerY, between, children, ...rest },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={clsx(between ? 'row-between' : 'row', className, {
                    'justify-center items-center': center,
                    'items-center': centerY,
                    'justify-center': centerX,
                })}
                {...rest}
            >
                {children}
            </div>
        );
    }
);

export default Row;
