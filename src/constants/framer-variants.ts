export const EXPOSE_FROM_CORNER = {
    open: {
        clipPath: 'circle(150% at right top)',
        transition: {
            type: 'spring',
            stiffness: 50,
            restDelta: 2,
        },
    },
    closed: {
        clipPath: 'circle(0% at right top)',
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

export const EXPOSE_FROM_UP = {
    open: {
        height: 'auto',
        opacity: 1,
        display: 'flex',
        transition: {
            duration: 0.5,
        },
    },
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
        transitionEnd: {
            display: 'none',
        },
    },
};
