import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <>
      {new Array(10).fill(<ProductCard />).map((Products) => {
        {
          return Products;
        }
      })}
    </>
  );
};

export default ProductList;
