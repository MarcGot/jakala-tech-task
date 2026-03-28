import {getProducts} from "@/libs/api";
import FlowerCard from "@/components/features/FlowerCard/FlowerCard";

async function FlowersSection({
    search,
 }: {
    search: string;
}) {
    const products = await getProducts(search);
    console.log('search',search);
    console.log('products',products);

    if (products.length === 0) {
        return <p className="text-center py-20">No hemos encontrado flores con ese nombre.</p>;
    }

    return (
        <section className={"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
            {products.map((flower) => (
                <FlowerCard flower={flower} key={flower.id}/>
            ))}
        </section>
    )
}


export default FlowersSection;
