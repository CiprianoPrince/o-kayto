import { BreadCrumb } from '../../../components/ui';
import { useGetVariantsByProductIdQuery } from '../../../features/products/variantSlice';
import { useState } from 'react';
import ProductVariant from './ProductVariant';

const SingleProduct = ({ categoryParam, productParam }) => {
    const [currentVariant, setCurrentVariant] = useState(0);

    console.log(currentVariant);

    const {
        data: variants,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetVariantsByProductIdQuery(productParam);

    let content;
    if (isLoading) {
        content = <h1>Loading...</h1>;
    } else if (isSuccess) {
        content = (
            <ProductVariant
                variants={variants}
                selectedVariant={variants[currentVariant]}
                setCurrentVariant={setCurrentVariant}
            />
        );
    } else if (isError) {
        content = <h1>{error}...</h1>;
    }

    return (
        <main>
            <section className="container mx-auto space-y-8 px-4 py-8">
                <div>
                    <BreadCrumb>
                        <BreadCrumb.Item to="/">Home</BreadCrumb.Item>
                        <BreadCrumb.Item to="/shop">Shop</BreadCrumb.Item>
                        {categoryParam ? (
                            <BreadCrumb.Item to={`/shop?category=${categoryParam}`}>
                                {categoryParam.toUpperCaseFirst()}
                            </BreadCrumb.Item>
                        ) : null}
                        {productParam ? (
                            <BreadCrumb.Item
                                to={`/shop?category=${categoryParam}&product=${productParam}`}
                            >
                                {productParam.toUpperCaseFirst()}
                            </BreadCrumb.Item>
                        ) : null}
                    </BreadCrumb>
                </div>

                <div className="flex flex-col justify-center gap-4 md:flex-row">{content}</div>
            </section>
        </main>
    );
};

export default SingleProduct;
