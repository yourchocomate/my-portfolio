import type { useNav } from '@/hooks/ui/useNav';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { NavText } from '..';

const ContactMeNavItem: React.FC<{
    control: ReturnType<typeof useNav>;
    className?: string;
}> = ({ control, className }) => {
    return (
        <Link
            ref={control.contactRef}
            to={'/contact'}
            className={clsx('h-full', className)}
            onClick={() => control.setActiveIndex(control.navItems.length - 1)}
        >
            <NavText
                bleft
                className={clsx(
                    control.navItems.length - 1 === control.activeIndex &&
                        '!text-secondary-4'
                )}
            >
                _contact-me
            </NavText>
        </Link>
    );
};

export default ContactMeNavItem;
