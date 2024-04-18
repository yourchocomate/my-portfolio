import { Headline, SubHeadline } from '@/components/ui/typography';
import { BlobOverlay } from '@/components/ui';
import { TypeAnimation } from 'react-type-animation';
import SnakeBoard from '@/components/snake/SnakeBoard';
import { Column, Div, Row } from '@/components/ui/elements';

const HomePage = () => {
    return (
        <Row className="max-w-7xl mx-auto h-full">
            <Div centerY className="justify-start overflow-hidden w-full lg:w-1/2 h-full pl-10 xl:pl-0">
                <Column between className="relative lg:justify-center items-start w-full h-[70%] lg:h-full">
                    <Column>
                        <p className="text-secondary-4">Hi all, I'm</p>
                        <Headline className="text-secondary-4">
                            Habibur Rahman
                        </Headline>
                        <SubHeadline className="text-accent-2 lg:text-secondary-3">
                            {'>'}{' '}
                            <TypeAnimation
                                sequence={[
                                    'Fullstack Developer',
                                    500,
                                    'Passionate coder',
                                    500,
                                    'Tech enthusiast',
                                    500,
                                ]}
                                wrapper="span"
                                speed={1}
                                repeat={Infinity}
                            />
                        </SubHeadline>
                    </Column>
                    <Div className="hidden lg:flex mt-8">
                        <pre>
                            {`
// complete the game to continue
// you can see it also in my github page
`}
                            <span className="text-secondary-3">const</span>{' '}
                            <span className="text-accent-2">github</span> ={' '}
                            <span className="text-accent-3">
                                https://github.com/yourchocomate/snake
                            </span>
                        </pre>
                    </Div>
                    <Div className="lg:hidden z-10">
                        <pre className="text-wrap">
                            {`
// find my profile on github
`}
                            <span className="text-secondary-3">const</span>{' '}
                            <span className="text-accent-2">github</span> ={' '}
                            <span className="text-accent-3">
                                https://github.com/yourchocomate
                            </span>
                        </pre>
                    </Div>
                    <BlobOverlay className="lg:hidden" />
                </Column>
            </Div>
            <Div className="hidden w-1/2 h-full relative lg:flex items-center justify-end pr-10 xl:pr-0">
                <SnakeBoard />
                <BlobOverlay />
            </Div>
        </Row>
    );
};

export default HomePage;
