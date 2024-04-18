import { IInputGroupProps } from '.';
import { Column } from '../ui/elements';

const InputGroup: React.FC<IInputGroupProps> = ({ children }) => {
    return <Column className="gap-2">{children}</Column>;
};

export default InputGroup;
