/* eslint-disable @typescript-eslint/naming-convention */
export interface Blogs {
    id: string;
    title: string;
    slug: string;
    image_url: string;
    content: string;
    start_date: Date;
    end_date: Date;
    categoria: Categoria[];
}

export interface Categoria {
    id: string;
    name: string;
}
