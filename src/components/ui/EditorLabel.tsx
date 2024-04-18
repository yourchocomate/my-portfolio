import clsx from 'clsx';
import SVG from '../SVG';
import { IEditorFileLabelProps } from '.';
import { Div, Row } from './elements';

const EditorLabel: React.FC<IEditorFileLabelProps> = ({
    active,
    onClick,
    children,
    onClose,
}) => {
    return (
        <Row
            between
            centerY
            className={clsx(
                'w-48 h-8 lg:h-[2.75rem] px-4 border-r border-stroke-primary cursor-pointer',
                {
                    'text-secondary-4': active,
                }
            )}
        >
            <Div className="w-32 truncate" onClick={onClick}>
                {children}
            </Div>
            <SVG name="cross" className="size-3" onClick={onClose} />
        </Row>
    );
};

export default EditorLabel;
