import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Footer, NavText } from '..';
import { EXPOSE_FROM_CORNER } from '@/constants/framer-variants';
import { useNav } from '@/hooks/ui/useNav';
import { Link } from 'react-router-dom';
import SVG from '@/components/SVG';
import { Column, Row } from '../elements';

const MobileNavMenu: React.FC<
    HTMLMotionProps<'div'> & {
        isOpen: boolean | undefined;
        onClose: () => void;
        control: ReturnType<typeof useNav>;
    }
> = ({ isOpen, onClose, className, control, ...rest }) => {
    const { activeIndex, setActiveIndex, navItems } = control;

    return (
        <motion.div
            initial={false}
            variants={EXPOSE_FROM_CORNER}
            animate={isOpen ? 'open' : 'closed'}
            className={clsx(
                'lg:hidden fixed top-0 size-full bg-primary-1 overflow-hidden z-50',
                className
            )}
            {...rest}
        >
            <Column>
                <Row
                    between
                    centerY
                    className="w-full h-[2.8rem] px-4 border-b border-stroke-primary"
                >
                    <Link
                        to={'/'}
                        onClick={onClose}
                        className="text-secondary-1"
                    >
                        habibur-rahman
                    </Link>
                    <SVG
                        name="cross-menu"
                        onClick={onClose}
                        className="size-4"
                    />
                </Row>
                {navItems.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <NavText
                            bbottom
                            className={clsx('py-2 !px-4', {
                                '!text-secondary-4': activeIndex === index,
                            })}
                            onClick={() => setActiveIndex(index)}
                        >
                            _{item.name}
                        </NavText>
                    </Link>
                ))}
            </Column>
            <Footer className="fixed bottom-0" />
        </motion.div>
    );
};

export default MobileNavMenu;
