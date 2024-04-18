import SVG from '../SVG';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion';
import UserImage from '@/assets/user.jpg';
import { Suspense, lazy } from 'react';
import { Column, Div, Row } from '../ui/elements';

const CodeMirror = lazy(() =>
    import('@/components/codemirror').then((module) => ({
        default: module.CodeMirror,
    }))
);

const SnippetShowCase = () => {
    return (
        <Column className="w-full px-6 mb-6">
            <Div className="mt-6 mb-14">
                <span className="text-secondary-4 lg:text-secondary-1">// Code snippet showcase:</span>
            </Div>
            {[...Array(3)].map((_, i) => (
                <AccordionItem key={i} className="overflow-hidden mb-6">
                    <Row between>
                        <Row centerY className="gap-3">
                            <img
                                src={UserImage}
                                className="size-9 rounded-full object-cover"
                            />
                            <Column>
                                <span className="text-secondary-3 font-bold">
                                    @yourchocomate
                                </span>
                                <span className="text-sm">
                                    Created 5 months ago
                                </span>
                            </Column>
                        </Row>
                        <Row className="items-start gap-3">
                            <AccordionTrigger className="row items-center gap-2">
                                <SVG name="message-bubble" className="size-4" />
                                <span>details</span>
                            </AccordionTrigger>
                            <Row centerY className="gap-2 hidden xl:flex">
                                <SVG name="star" className="size-4" />
                                <span>0 stars</span>
                            </Row>
                        </Row>
                    </Row>
                    <Suspense fallback={'...loading'}>
                        <CodeMirror
                            readOnly
                            lineWrapping
                            className="my-4"
                            value={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
        const value: T = parseModel(chunk._response, chunk._value);
        const initializedChunk: InitializedChunk<T> = (chunk: any);
        initializedChunk._status = INITIALIZED;
        initializedChunk._value = value;
        return value;
        }
        `}
                            themeSettings={{
                                background: 'var(--color-primary-3)',
                            }}
                            lang={'typescript'}
                            snippetShowcase
                        />
                    </Suspense>
                    <AccordionContent className="border-t border-stroke-primary mt-2">
                        <Div className="flex my-4">
                            My work here was 5 months ago. It was for the
                            project called “...”.
                        </Div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Column>
    );
};

export default SnippetShowCase;
