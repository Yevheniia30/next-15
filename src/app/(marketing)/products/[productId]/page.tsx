import {Metadata} from 'next';

type Props = {
    params: Promise<{productId: number}>;
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {productId} = await params;
    // get product title or other info(useful for real apps)
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`IPhone ${productId}`);
        }, 100);
    });
    return {
        title: `${title}`,
        description: `Details about product ${productId}`,
    };
};

const ProductDetails = async ({params}: Props) => {
    const {productId} = await params;
    return <div>Details about product {productId}</div>;
};

export default ProductDetails;
