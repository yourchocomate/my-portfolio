import clsx from 'clsx';
import { ITextProps } from '.';

const Text: React.FC<ITextProps> = ({ children, className, ...rest }) => {
    return (
        <p className={clsx('', className)} {...rest}>
            {children}
        </p>
    );
};

export default Text;
