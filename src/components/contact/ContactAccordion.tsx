import { PERSONAL } from '@/constants/contacts';
import SVG from '../SVG';
import { BaseAccordion, IBaseAccordionProps } from '../ui';
import { Row } from '../ui/elements';

const ContactAccordion: React.FC<IBaseAccordionProps> = (props) => {
    return (
        <BaseAccordion {...props} open title="contacts">
            <Row centerY className="gap-3">
                <SVG name="mail" className="size-4" />
                <span>{PERSONAL.email}</span>
            </Row>
            <Row centerY className="gap-3">
                <SVG name="phone" className="size-4" />
                <span>{PERSONAL.phone}</span>
            </Row>
        </BaseAccordion>
    );
};

export default ContactAccordion;
