import { getProducts } from "@/libs/api";
import FlowerCard from "@/components/features/FlowerCard/FlowerCard";

async function FlowersSection({ search }: { search: string }) {
    const products = await getProducts(search);

    if (products.length === 0) {
        return <p className="py-20 text-center">No hemos encontrado flores con ese nombre.</p>;
    }

    return (
        <section className={"grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"}>
            {products.map((flower) => (
                <FlowerCard flower={flower} key={flower.id} />
            ))}
        </section>
    );
}

export default FlowersSection;
