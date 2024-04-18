import { NavText } from '@/components/ui';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';
import { useNav } from '@/hooks/ui/useNav';
import MobileNavMenu from './MobileNavMenu';
import ContactMeNavItem from './ContactMeNavItem';
import SVG from '@/components/SVG';
import { Row } from '../elements';

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>();
    const control = useNav();
    const {
        activeIndex,
        setActiveIndex,
        navListRef,
        contactNavPosition,
        contactNavWidth,
        navElements,
        navItems,
    } = control;

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const items = navItems.filter((i) => !i.mobileOnly);

    return (
        <header className="bg-transparent row-between items-center border-b border-stroke-primary h-[3rem]">
            <Row className="h-full">
                <Row centerY className="left-sidebar pl-4">
                    <Link to={'/'} className="text-secondary-1">habibur-rahman</Link>
                </Row>
                <Row
                    id="desktop-nav"
                    ref={navListRef}
                    className="relative h-full hidden lg:flex"
                >
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="h-full"
                            onClick={() => setActiveIndex(index)}
                        >
                            <NavText
                                bleft
                                bright={items.length - 1 === index}
                                className={clsx({
                                    '!text-secondary-4': activeIndex === index,
                                })}
                            >
                                _{item.name}
                            </NavText>
                        </Link>
                    ))}
                    <motion.div
                        className="absolute bottom-0 h-[0.08rem] bg-accent-1 hidden lg:flex"
                        animate={{
                            width:
                                activeIndex === navItems.length - 1
                                    ? contactNavWidth
                                    : navElements[activeIndex]?.[0],
                            x:
                                activeIndex === navItems.length - 1
                                    ? contactNavPosition
                                    : navElements[activeIndex]?.[1],
                        }}
                        transition={{ duration: 0.5 }}
                    />
                </Row>
            </Row>
            <ContactMeNavItem control={control} className="hidden lg:flex" />
            <NavText
                className="lg:hidden pr-4 z-50"
                onClick={toggleMenu}
            >
                <SVG name="hamburger" />
            </NavText>
            <MobileNavMenu
                isOpen={isMenuOpen}
                control={control}
                onClose={toggleMenu}
            />
        </header>
    );
};

export default Header;
