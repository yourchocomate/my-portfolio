import { createContext, useState } from 'react';
import { IAccordionContext } from '.';

export const AccordionContext = createContext<IAccordionContext | null>(null);

export const AccordionProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <AccordionContext.Provider value={{ open, toggle }}>
            {children}
        </AccordionContext.Provider>
    );
};
