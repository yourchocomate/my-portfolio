/** Exports */
export { default as Tabs } from './Tabs';
export { default as SnippetShowCase } from './SnippetShowcase';

/** Helpers */

export const getIconName = (type: string) => {
    switch (type) {
        case 'md':
            return 'markdown';
        case 'html':
            return 'html';
        case 'css':
            return 'css';
        case 'php':
            return 'html';
        default:
            return 'react';
    }
};

/** Typings */

export interface IInfoTab {
    id: number;
    icon: string;
    name: string;
    default?: boolean;
    description?: string;
}

export type FileTypes =
    | 'txt'
    | 'md'
    | 'jsx'
    | 'php'
    | 'js'
    | 'ts'
    | 'tsx'
    | 'html';

export interface IInfoTabItemFile {
    uuid: string;
    name: string;
    type: FileTypes;
    content: string;
}

export interface IInfoTabsItem {
    uuid?: string;
    tab_id: number;
    name: string;
    type: 'folder' | 'file';
    files?: IInfoTabItemFile[];
    content?: string;
    contentType?: FileTypes;
}

export interface ITabsProps {
    tab: IInfoTab;
    openedFile: IInfoTabItemFile | null;
    setOpenedFile: (file: IInfoTabItemFile) => void;
}