import { useEffect, useState } from 'react';

const SVG: React.FC<
    React.HtmlHTMLAttributes<HTMLOrSVGElement> & { name: string }
> = ({ name, className, ...rest }) => {
    const [Element, setElement] = useState<JSX.Element | null>(null);

    useEffect(() => {
        import(`../assets/icons/${name}.svg?react`).then(module => {
            const Component = module.default;
            setElement(<Component className={className} {...rest} />);
        });
    }, [name, className, rest]);

    return <>{Element}</>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default SVG;
