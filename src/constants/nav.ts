export interface INavItem {
    name: string;
    path: string;
    mobileOnly?: boolean;
}

export const NAV_ITEMS: INavItem[] = [
    {
        name: 'hello',
        path: '/',
    },
    {
        name: 'about-me',
        path: '/about',
    },
    {
        name: 'projects',
        path: '/projects',
    },
    {
        name: 'contact-me',
        path: '/contact',
        mobileOnly: true
    }
];
