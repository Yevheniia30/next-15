const ProductDetails = async ({params}: {params: Promise<{id: number}>}) => {
    const {id} =await params
    return (
        <div>
           Details about product {id}
        </div>
    );
};

export default ProductDetails;