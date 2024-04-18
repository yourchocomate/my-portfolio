import { NAV_ITEMS } from '@/constants/nav';
import { useEffect, useRef, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';

export const useNav = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [navItems, setNavItems] = useState<typeof NAV_ITEMS>(NAV_ITEMS);
    const [navElements, setNavElements] = useState<number[][]>([]);
    const navListRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLAnchorElement>(null);

    const contactNavWidth = contactRef.current?.clientWidth || 0;
    const contactNavPosition =
        window.innerWidth -
        (navListRef.current?.offsetLeft || 0) -
        contactNavWidth;

    useEffect(() => {
        if (!navListRef.current) return;
        const resizeObserver = new ResizeObserver((entries) => {
            const elements = navItems.map((_, i) => {
                const child = entries[0].target.children[i] as HTMLElement;
                return [child?.offsetWidth, child?.offsetLeft];
            });
            setNavElements(elements);
        });
        resizeObserver.observe(navListRef.current as Element);
        contactRef.current &&
            resizeObserver.observe(contactRef.current as Element);
        return () => {
            resizeObserver.disconnect();
        };
    }, [navListRef, contactRef, navItems]);

    useEffect(() => {
        setActiveIndex(
            NAV_ITEMS.findIndex((i) => matchPath(i.path, location.pathname))
        );
    }, [location]);

    return {
        activeIndex,
        setActiveIndex,
        navItems,
        setNavItems,
        navElements,
        navListRef,
        contactRef,
        contactNavWidth,
        contactNavPosition,
    };
};
