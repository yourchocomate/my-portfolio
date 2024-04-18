import clsx from 'clsx';
import { IHeadlineProps } from '.';

const SubHeadline: React.FC<IHeadlineProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <h2 className={clsx(className)} {...rest}>
            {children}
        </h2>
    );
};

export default SubHeadline;
