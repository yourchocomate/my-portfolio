/* eslint-disable react-refresh/only-export-components */
import { type RouteObject } from 'react-router-dom';
import { BaseLayout } from '@/components/ui';

import HomePage from '@/pages/home/home.page';
import AboutPage from '@/pages/about/about.page';
import ContactMePage from '@/pages/contact/contact.page';
import ProjectsPage from '@/pages/projects/projects.page';

const webRoutes: RouteObject = {
    path: '/',
    element: <BaseLayout />,
    children: [
        {
            index: true,
            element: <HomePage />,
        },
        {
            path: 'about',
            element: <AboutPage />,
        },
        {
            path: 'projects',
            element: <ProjectsPage />,
        },
        {
            path: 'contact',
            element: <ContactMePage />,
        }
    ],
};

const routes: RouteObject[] = [webRoutes];

export default routes;
