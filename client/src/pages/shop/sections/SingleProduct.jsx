import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { example } from '../../../assets/images/products';
import { BreadCrumb } from '../../../components/ui';

const SingleProduct = ({ categoryParam, productParam }) => {
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
              <BreadCrumb.Item to={`/shop?category=${categoryParam}&product=${productParam}`}>
                {productParam.toUpperCaseFirst()}
              </BreadCrumb.Item>
            ) : null}
          </BreadCrumb>
        </div>

        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <div className="border md:basis-6/12">
            <img src={example} alt="" />
          </div>

          <div className=" basis-12/12 space-y-4 divide-y md:basis-6/12 md:self-start">
            <div className="flex flex-col gap-2">
              <h1 className="header-3 font-palanquin font-bold">Product title</h1>
              <span>star star star</span>
              <span className="font-montserrat text-xl font-bold text-secondary-600">
                &#8369;1000
              </span>
            </div>

            <div className="flex flex-row gap-2 py-4">
              <div className="flex-1 space-y-2">
                <p className="font-medium">Available Size</p>
                <div className="space-x-2">
                  <button className="button | group relative p-4" width={50} height={50}>
                    <span className="top-50 left-50 absolute -translate-x-[50%] -translate-y-[50%]">
                      S
                    </span>
                  </button>

                  <button className="button | relative p-4" width={50} height={50}>
                    <span className="top-50 left-50 absolute -translate-x-[50%] -translate-y-[50%]">
                      M
                    </span>
                  </button>

                  <button className="button | relative p-4" width={50} height={50}>
                    <span className="top-50 left-50 absolute -translate-x-[50%] -translate-y-[50%]">
                      L
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <p className="font-medium">Available Color</p>
                <div className="space-x-2">
                  <button className="rounded-full bg-secondary-500 p-4"></button>
                  <button className="rounded-full bg-secondary-500 p-4"></button>
                  <button className="rounded-full bg-secondary-500 p-4"></button>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-start py-4">
              <div className="input-group |group  flex max-w-[10rem] justify-center">
                <span
                  className="input-group-text | group bg-transparent hover:bg-accent-500"
                  tabIndex="0"
                >
                  <MinusIcon
                    className="h-6 w-6 text-accent-500 group-hover:text-primary-50"
                    role="button"
                  />
                </span>
                <input
                  className="form-control | peer w-full max-w-[3.5rem] text-center focus:ring-accent-500"
                  type="number"
                />

                <span
                  className="input-group-text | group bg-transparent hover:bg-accent-500"
                  tabIndex="0"
                >
                  <PlusIcon
                    className="h-6 w-6 text-accent-500 group-hover:text-primary-50"
                    role="button"
                  />
                </span>
              </div>

              <button className="button">Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
