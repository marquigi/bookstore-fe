export interface Category {
    id: number;
    name: string;
}

export interface Publisher {
    id: number;
    name: string;
}

export interface Book {
    ean: string;
    author: string;
    category: Category;
    image: string;
    n_pages: number;
    title: string;
    price: number;
    on_sale?: boolean;
    // Puo capitare che ci sono flag che non sono prensenti in tutti gli oggetti di un array
    // Quindi per evitare problemi e/o errori utilizzo il "?": on_sale?: boolean;
    publisher: Publisher;
    year: number;
}