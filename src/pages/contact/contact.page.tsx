import BreadCrumb from '@/components/BreadCrumb';
import SVG from '@/components/SVG';
import { ContactAccordion, InputGroup } from '@/components/contact';
import { BaseAccordion, EditorLabel } from '@/components/ui';
import { Button } from '@/components/ui/buttons';
import { Column, Div } from '@/components/ui/elements';
import { Input, Label, TextArea } from '@/components/ui/form';
import { SOCIALS } from '@/constants/contacts';
import { Suspense, lazy } from 'react';

const CodeMirror = lazy(() =>
    import('@/components/codemirror').then((module) => ({
        default: module.CodeMirror,
    }))
);

const ContactMePage = () => {
    return (
        <Column className="lg:flex-row size-full overflow-x-hidden overflow-y-scroll lg:overflow-hidden no-scrollbar">
            <BreadCrumb className="lg:hidden" />
            <Column className="left-sidebar-contact border-r border-stroke-primary lg:h-full gap-1 lg:gap-0">
                <ContactAccordion />
                <BaseAccordion
                    open
                    title="find-me-also-in"
                    triggerClass="border-t"
                >
                    {SOCIALS.map((item, index) => (
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                            className="row items-center gap-3"
                        >
                            <SVG name="external" className="size-4" />
                            <span className="hover:text-secondary-4">
                                {item.name}
                            </span>
                        </a>
                    ))}
                </BaseAccordion>
            </Column>
            <Column className="lg:flex-row flex-1 mt-6 lg:mt-0">
                <Column className="lg:w-1/2 lg:border-r border-stroke-primary">
                    <Div className="hidden lg:flex w-full h-11 lg:border-b border-stroke-primary">
                        <EditorLabel>contacts</EditorLabel>
                    </Div>
                    <Div centerX className="size-full lg:pt-16">
                        <Column className="px-6 lg:px-16 gap-6 w-full">
                            <InputGroup>
                                <Label>_name:</Label>
                                <Input />
                            </InputGroup>
                            <InputGroup>
                                <Label>_email:</Label>
                                <Input />
                            </InputGroup>
                            <InputGroup>
                                <Label>_message:</Label>
                                <TextArea rows={4} />
                            </InputGroup>
                            <div>
                                <Button default>send-message</Button>
                            </div>
                        </Column>
                    </Div>
                </Column>
                <Div className="lg:w-1/2">
                    <Div className="hidden lg:flex w-full h-11 lg:border-b border-stroke-primary" />
                    <Div className="size-full px-6 lg:pl-14 py-16">
                        <Suspense fallback={'...loading'}>
                            <CodeMirror
                                readOnly
                                lineNumbers
                                lineWrapping
                                value={`const ContactSchema = z.object({
    name: z.string().required(),
    email: z.string().email().required(),
    message: z.string().min(10).max(200)
})

type ContactSchemaType = z.infer<typeof ContactSchema>

const form = useForm<ContactSchemaType>({ 
    resolver: zodResolver(ContactSchema)  
})

<button onClick={
    () => form.handleSubmit()
}>send-message</button>`}
                                lang={'javascript'}
                            />
                        </Suspense>
                    </Div>
                </Div>
            </Column>
        </Column>
    );
};

export default ContactMePage;
