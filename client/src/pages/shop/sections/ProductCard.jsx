import { Link } from 'react-router-dom';
import { example } from '../../../assets/images/products';
import FadeIn from '../../../components/others/FadeIn';

const ProductCard = () => {
  return (
    <FadeIn
      className="flex flex-col space-y-2"
      as={Link}
      to={`/shop?category=kids&product=qfpqwf-23423-rp`}
    >
      <img className="rounded-md" src={example} alt="example" />
      <div className="flex flex-row items-center justify-between">
        <span className="font-palanquin text-xl font-medium tracking-wide text-secondary-500">
          Title
        </span>
        <span className="text-2xl font-medium text-secondary-600">&#8369;100</span>
      </div>
      <div className="flex flex-row items-center justify-between">
        <span className="font-montserrat text-base font-medium text-secondary-400">3 Colors</span>
        <span className="font-montserrat text-base font-medium text-secondary-400">&#8369;200</span>
      </div>
    </FadeIn>
  );
};

export default ProductCard;
