import clsx from 'clsx';
import { ILabelProps } from '.';

const Label: React.FC<ILabelProps> = ({ children,  className, ...rest }) => {
    return (
        <label className={clsx(className)} {...rest}>
            {children}
        </label>
    );
};

export default Label;
