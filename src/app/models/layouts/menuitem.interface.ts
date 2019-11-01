export interface Menuitem {

    name: string;
    icon: string;
    href: string;
    class: string;
    isHidden: boolean;
    isCategory: boolean;
    items: Menuitem[];

}