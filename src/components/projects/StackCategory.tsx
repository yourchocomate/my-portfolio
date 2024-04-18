import SVG from '../SVG';
import { BaseAccordion } from '../ui';
import { Row } from '../ui/elements';
import { Input, Label } from '../ui/form';

const STACKS = [
    {
        name: 'React',
        icon: 'react',
    },
    {
        name: 'HTML',
        icon: 'html',
    },
    {
        name: 'CSS',
        icon: 'css',
    },

    {
        name: 'Vue',
        icon: 'vue',
    },

    {
        name: 'Angular',
        icon: 'angular',
    },
];

const StackCategory = () => {
    return (
        <BaseAccordion open title="projects">
            {STACKS.map((stack, i) => (
                <Row centerY key={i} className="gap-6 cursor-pointer">
                    <Input
                        type="checkbox"
                        id={stack.name.toLowerCase()}
                        className="appearance-none relative peer shrink-0 size-4 rounded-sm 
                          accent-primary-2 checked:accent-secondary-1 checked:bg-secondary-1 border border-secondary-1"
                    />
                    <Label
                        htmlFor={stack.name.toLowerCase()}
                        className="row gap-4 items-center"
                    >
                        <SVG name={stack.icon} className="size-4" />
                        <span className="text-secondary-4">{stack.name}</span>
                    </Label>
                    <SVG
                        name="tick"
                        className="text-secondary-4 p-[2px] size-4 absolute hidden peer-checked:block pointer-events-none"
                    />
                </Row>
            ))}
        </BaseAccordion>
    );
};

export default StackCategory;
