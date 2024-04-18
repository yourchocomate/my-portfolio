import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import { Suspense } from 'react';
import FullscreenLoader from '@/components/FullscreenLoader';

function App() {
    const content = useRoutes(routes);
    return <Suspense fallback={<FullscreenLoader />}>{content}</Suspense>;
}

export default App;
