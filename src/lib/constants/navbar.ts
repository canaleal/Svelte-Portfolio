import type { INavbarElementType } from "$lib/types/navbar-types";
export const NAVBAR_ELEMENTS: INavbarElementType[] = [
    { id: 0, name: 'Canales', icon: 'fa fa-diamond', url: '/' },  
    { id: 2, name: 'Github', icon: 'fa-brands fa-github', url: 'https://github.com/canaleal' },
    {
        id: 3,
        name: 'Bitbucket',
        icon: 'fa-brands fa-bitbucket',
        url: 'https://bitbucket.org/canaleal/'
    },
    {
        id: 4,
        name: 'LinkedIn',
        icon: 'fa-brands fa-linkedin',
        url: 'https://www.linkedin.com/in/alex-canales/'
    }
];