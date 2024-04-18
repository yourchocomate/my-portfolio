import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import { AccordionContext } from './AccordionContext';
import SVG from '@/components/SVG';
import { IAccordionTriggerProps } from '.';
import { Row } from '../elements';

const AccordionTrigger: React.FC<IAccordionTriggerProps> = ({
    children,
    className,
    indicator,
    open,
    ...rest
}) => {
    const state = useContext(AccordionContext);

    useEffect(() => {
        if (!state) return;
        open && !state.open && state.toggle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <Row
            centerY
            className={clsx('z-10 cursor-pointer', className, {
                'text-secondary-4': state?.open,
            })}
            onClick={state?.toggle}
            {...rest}
        >
            {indicator &&
                (indicator === 'filled' ? (
                    <SVG
                        name="arrow-down-filled"
                        className={clsx('delay-50 size-2 mr-4', {
                            '-rotate-90': !state?.open,
                        })}
                    />
                ) : (
                    <SVG
                        name="arrow-right"
                        className={clsx('delay-50 size-3 mr-4', {
                            'rotate-90': state?.open,
                        })}
                    />
                ))}
            {children}
        </Row>
    );
};

export default AccordionTrigger;
