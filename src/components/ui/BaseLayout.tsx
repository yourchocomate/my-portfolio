import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components/ui';
import { Div } from './elements';

const BaseLayout = () => {
    return (
        <Div className="absolute inset-0">
            <Div className="bg-primary-2 h-dvh overflow-hidden flex flex-col justify-between">
                <Header />
                <main className="w-full h-full overflow-hidden no-scrollbar">
                    <Outlet />
                </main>
                <Footer className="hidden lg:flex"/>
            </Div>
        </Div>
    );
};

export default BaseLayout;
