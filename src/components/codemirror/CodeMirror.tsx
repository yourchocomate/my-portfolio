import { githubDarkInit } from '@uiw/codemirror-theme-github';
import ReactCodeMirror, {
    EditorView,
    ReactCodeMirrorProps,
} from '@uiw/react-codemirror';
import { CODE_EDITOR_THEME_CONFIG, getLang } from '.';
import clsx from 'clsx';

const CodeMirror: React.FC<
    ReactCodeMirrorProps & {
        lang: string;
        lineWrapping?: boolean;
        lineNumbers?: boolean;
        snippetShowcase?: boolean;
        themeSettings?: Record<string, string>;
    }
> = ({
    basicSetup,
    lang,
    lineWrapping,
    lineNumbers,
    themeSettings,
    snippetShowcase,
    className,
    ...rest
}) => {
    return (
        <ReactCodeMirror
            {...rest}
            className={clsx('size-full no-scrollbar text-base', className)}
            basicSetup={{
                ...basicSetup?.valueOf,
                lineNumbers: !!lineNumbers,
                foldGutter: false,
            }}
            theme={githubDarkInit({
                ...CODE_EDITOR_THEME_CONFIG,
                settings: {
                    ...CODE_EDITOR_THEME_CONFIG.settings,
                    ...themeSettings,
                },
            })}
            extensions={[
                getLang(lang),
                ...(lineWrapping ? [EditorView.lineWrapping] : []),
                ...(snippetShowcase
                    ? [
                          EditorView.theme({
                              '&': {
                                  padding: '0.875rem',
                                  borderRadius: '0.875rem',
                                  border: '1px solid var(--color-stroke-primary)',
                              },
                          }),
                      ]
                    : []),
            ]}
        />
    );
};

export default CodeMirror;
