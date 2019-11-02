export interface Menuitem {

    name: string;
    icon?: string;
    href?: string;
    class?: string;
    isCategory?: boolean;
    isFold?: boolean;
    isDisabled?: boolean;
    items: Menuitem[];

}