import { ReactNode } from "react";

export interface Project {
    id: number | string;
    title: string;
    link: string;
    action: string;
    info: string;
    img: string;
    icons: ReactNode[]

}
