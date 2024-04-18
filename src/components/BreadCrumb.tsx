import { INavItem, NAV_ITEMS } from '@/constants/nav';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { Div } from './ui/elements';

const BreadCrumb: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
    className,
    ...rest
}) => {
    const location = useLocation();
    const [route, setRoute] = useState<INavItem>();

    useEffect(() => {
        setRoute(NAV_ITEMS.find((n) => matchPath(n.path, location.pathname)));
    }, [location]);

    return (
        <Div
            className={clsx('py-8 px-6 text-secondary-4', className)}
            {...rest}
        >
            <span>_{route?.name}</span>
        </Div>
    );
};

export default BreadCrumb;
