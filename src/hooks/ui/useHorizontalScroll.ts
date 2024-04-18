import { useEffect, useRef } from 'react';

export const useHorizontalScroll = <T extends HTMLElement>() => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const wheel = (e: WheelEvent) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            el.scrollTo({
                left: el.scrollLeft + e.deltaY,
                behavior: 'smooth',
            });
        };
        el.addEventListener('wheel', wheel);
        return () => el.removeEventListener('wheel', wheel);
    }, []);

    return ref;
};
