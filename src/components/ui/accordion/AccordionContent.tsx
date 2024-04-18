import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { useContext } from 'react';
import { AccordionContext } from './AccordionContext';
import { EXPOSE_FROM_UP } from '@/constants/framer-variants';

const AccordionContent: React.FC<HTMLMotionProps<'div'>> = ({
    children,
    className,
    ...rest
}) => {
    const state = useContext(AccordionContext);

    if (!state) return null;

    return (
        <motion.div
            initial={false}
            variants={EXPOSE_FROM_UP}
            animate={state.open ? 'open' : 'closed'}
            className={clsx('z-1 cursor-pointer', className)}
            {...rest}
        >
            {children}
        </motion.div>
    );
};

export default AccordionContent;
