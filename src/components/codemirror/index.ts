import { javascript } from '@codemirror/lang-javascript';
import { php } from '@codemirror/lang-php';


/** Exports */
export { default as CodeMirror } from './CodeMirror';


/** Helpers */
export const CODE_EDITOR_THEME_CONFIG = {
    settings: {
        background: 'var(--color-primary-2)',
        gutterBackground: 'var(--color-primary-2)',
        lineHighlight: 'inherit',
        fontFamily: 'var(--font-family-firacode)',
    },
};

export const getLang = (type: string) => {
    switch (type) {
        case 'md':
            return javascript({ jsx: true, typescript: true });
        case 'html':
            return php();
        case 'css':
            return php();
        case 'php':
            return php();
        default:
            return javascript({ jsx: true, typescript: true });
    }
};