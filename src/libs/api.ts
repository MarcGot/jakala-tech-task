import {Flower} from "@/types/flower";

const API_URL = 'https://dulces-petalos.jakala.es/api/v1/product';

export async function getProducts(search?: string): Promise<Flower[]> {
    const res = await fetch(API_URL, { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error('Error al obtener el catálogo de Dulces Pétalos');
    }

    let products: Flower[] = await res.json();

    if (search) {
        const lowerSearch = search.toLowerCase();
        products = products.filter(product =>
            product.name.toLowerCase().includes(lowerSearch) ||
            product.binomialName.toLowerCase().includes(lowerSearch)
        );
    }

    return products;
}

export async function getProductById(id: string): Promise<Flower> {
    const res = await fetch(`${API_URL}/${id}`, { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error('Error al obtener los detalles del producto');
    }

    return res.json();
}
