import { Text } from '@/components/ui/typography';
import clsx from 'clsx';

interface NavTextProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
    bleft?: boolean;
    bright?: boolean;
    bbottom?: boolean;
    btop?: boolean;
}

const NavText: React.FC<NavTextProps> = ({
    children,
    bleft,
    bright,
    bbottom,
    btop,
    className,
    ...rest
}) => {
    return (
        <Text
            className={clsx(
                'flex items-center text-secondary-1 border-stroke-primary h-full px-6 hover:text-secondary-4 transition-colors duration-200 ease-in-out cursor-pointer',
                className,
                {
                    'border-l': bleft,
                    'border-r': bright,
                    'border-t': btop,
                    'border-b': bbottom,
                }
            )}
            {...rest}
        >
            {children}
        </Text>
    );
};

export default NavText;
