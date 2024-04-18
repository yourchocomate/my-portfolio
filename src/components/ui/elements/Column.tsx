import { forwardRef } from 'react';
import { IColumnProps } from '.';
import clsx from 'clsx';

const Column = forwardRef<HTMLDivElement, IColumnProps>(
    (
        { className, center, centerX, centerY, between, children, ...rest },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={clsx(
                    between ? 'column-between' : 'column',
                    className,
                    {
                        'justify-center items-center': center,
                        'items-center': centerX,
                        'justify-center': centerY,
                    }
                )}
                {...rest}
            >
                {children}
            </div>
        );
    }
);

export default Column;
