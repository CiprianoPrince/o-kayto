import Product from './Product';

const ProductList = () => {
  return (
    <>
      {new Array(10).fill(<Product />).map((Products) => {
        {
          return Products;
        }
      })}
    </>
  );
};

export default ProductList;
