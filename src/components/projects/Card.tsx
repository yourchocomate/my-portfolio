import Image from '@/assets/portfolio.jpeg';
import SVG from '../SVG';
import { Button } from '../ui/buttons';
import { Column, Div, Row } from '../ui/elements';

const Card = () => {
    return (
        <Column className="gap-4">
            <Div className="flex">
                <span className="text-secondary-3 mr-2">Project</span>//  _porfolio-page
            </Div>
            <Column className="bg-primary-3 border border-stroke-primary rounded-base">
                <Div className="relative">
                    <img
                        src={Image}
                        alt=""
                        className="object-cover h-full w-full"
                    />
                    <Row centerY className="absolute top-4 right-4 gap-3">
                        <SVG
                            name="react"
                            className="size-6 p-1 text-primary-3 bg-meta-1 rounded-sm"
                        />
                        <SVG
                            name="html"
                            className="size-6 p-1 text-primary-3 bg-meta-2 rounded-sm"
                        />
                        <SVG
                            name="vue"
                            className="size-6 p-1 text-primary-3 bg-meta-3 rounded-sm"
                        />
                    </Row>
                </Div>
                <Column className="gap-4 p-6">
                    <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                    <Div>
                        <Button default className="flex-0">
                            view-project
                        </Button>
                    </Div>
                </Column>
            </Column>
        </Column>
    );
};

export default Card;
