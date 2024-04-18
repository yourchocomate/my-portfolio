import clsx from 'clsx';
import { IHeadlineProps } from '.';

const Headline: React.FC<IHeadlineProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <h1 className={clsx(className)} {...rest}>
            {children}
        </h1>
    );
};

export default Headline;
