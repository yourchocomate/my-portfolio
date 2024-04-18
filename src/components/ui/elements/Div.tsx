import { forwardRef } from 'react';
import clsx from 'clsx';
import { IDivProps } from '.';

const Div = forwardRef<HTMLDivElement, IDivProps>(
    ({ className, center, centerX, centerY, children, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                className={clsx(className, {
                    'flex justify-center items-center': center,
                    'flex justify-center': centerX,
                    'flex items-center': centerY,
                })}
                {...rest}
            >
                {children}
            </div>
        );
    }
);

export default Div;
