import { IInfoTab, IInfoTabsItem } from '@/components/about';

export const INFO_TABS: IInfoTab[] = [
    {
        id: 1,
        icon: 'terminal',
        name: 'proffesional-info',
        description: '',
    },
    {
        id: 2,
        icon: 'joystick',
        name: 'personal-info',
        default: true,
        description: `/**
* About me
* I have 5 years of еxperience in web
* development lorem ipsum dolor sit amet, 
* consectetur adipiscing elit, sed do eiusmod
* tempor incididunt ut labore et dolore
* magna aliqua. Ut enim ad minim veniam,
* quis nostrud exercitation ullamco laboris
* nisi ut aliquip ex ea commodo consequat.
* Duis aute irure dolor in reprehenderit in
*
* Duis aute irure dolor in reprehenderit in
* voluptate velit esse cillum dolore eu fugiat 
* nulla pariatur. Excepteur sint occaecat 
* officia deserunt mollit anim id est laborum.
*/
`,
    },
    {
        id: 3,
        icon: 'gamepad',
        name: 'hobbies',
        description: '',
    },
];

export const INFO_TAB_ITEMS: IInfoTabsItem[] = [
    {
        tab_id: 1,
        name: 'experience',
        type: 'folder',
        files: [
            {
                uuid: 'djonuifbnreiufnewfb',
                name: 'basic',
                type: 'jsx',
                content: `const job = [
    {
        company: "Petloc",
        type: "startup",
        position: "Technical Lead"
    }
]`,
            },
        ],
    },
    {
        tab_id: 2,
        name: 'bio',
        type: 'folder',
        files: [
            {
                uuid: 'rmjenfuibweibfwebf',
                name: 'index.html',
                type: 'html',
                content: `<html>
    <head>
        <title>Habibur Rahman</title>
    </head>
    <body>
        <h1>Bio</h1>
        <h2>Name: Habibur Rahman</h2>
    </body>
</html>`,
            },
        ],
    },
    {
        tab_id: 2,
        name: 'interests',
        type: 'folder',
        files: [
            {
                uuid: 'dnojendijwndjenwdneff',
                name: 'index.php',
                type: 'php',
                content: `<?php

namespace HeyPHP;

class Hello {
    private string $text;

    public function __construct()
    {
        // This will lead to TypeError :3
        $this->text = [];
        // Php supports types :D, You had to write this
        $this->text = "This is valid";
    }
}
?>`,
            },
        ],
    },
    {
        tab_id: 2,
        name: 'education',
        type: 'folder',
        files: [
            {
                uuid: 'ndbuihbdhewbdiewnid',
                name: 'high-scool',
                type: 'md',
                content: 'school',
            },
            {
                uuid: 'dmkaofnenindqiwodmoinf',
                name: 'university',
                type: 'md',
                content: 'university',
            },
        ],
    },
    {
        tab_id: 3,
        uuid: 'niehwdbewydbvyewhudvbyuew',
        name: 'README',
        type: 'file',
        content: 'Cool texts',
    },
];
