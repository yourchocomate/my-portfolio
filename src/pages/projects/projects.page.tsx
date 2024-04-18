import BreadCrumb from '@/components/BreadCrumb';
import { Card, StackCategory } from '@/components/projects';
import { EditorLabel } from '@/components/ui';
import { Column, Div } from '@/components/ui/elements';

const ProjectsPage = () => {
    return (
        <Column className="lg:flex-row size-full overflow-x-hidden overflow-y-scroll lg:overflow-hidden no-scrollbar">
            <BreadCrumb className="lg:hidden" />
            <Column className="left-sidebar-projects border-r border-stroke-primary lg:h-full gap-1 lg:gap-0">
                <StackCategory />
            </Column>
            <Column className="flex-1 mt-6 lg:mt-0">
                <Div className="hidden lg:flex w-full h-11 lg:border-b border-stroke-primary">
                    <EditorLabel>projects</EditorLabel>
                </Div>
                <Div className="px-6 lg:hidden">
                    <span className="text-secondary-4">
                        // projects
                    </span>
                    <span> / all</span>
                </Div>
                <Div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 lg:p-12 overflow-x-hidden overflow-y-scroll scrollbar">
                    {[...Array(5)].map((_, i) => (
                        <Card key={i} />
                    ))}
                </Div>
            </Column>
        </Column>
    );
};

export default ProjectsPage;
