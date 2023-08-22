import BreadCrumbs from "../../components/ui/BreadCrumbs"
import "../../index.css"

const Cart = () => {
  return (
    <main>
      <section className='container mx-auto px-4 py-8'>
        <div className=''>
          <BreadCrumbs />
        </div>

        <div className='flex flex-col [ md:flex-row ]'>
          <div className='basis-2/3 p-8'>
            {/* <div className='flex flex-row justify-between'>
              <h2 className='header-2'>Cart</h2>

              <button>Remove</button>
            </div>

            <div className='flex flex-row'>
              <div className='basis-3/5 px-3 py-2 '>Product</div>
              <div className='basis-1/5  px-3 py-2 text-center'>Quantity</div>
              <div className='basis-1/5  px-3 py-2 text-center'>Price</div>
            </div>

            <hr />

            <div className='flex flex-row'>
              <div className='basis-3/5 px-3 py-2 '>Product</div>
              <div className='basis-1/5  px-3 py-2 text-center'>Quantity</div>
              <div className='basis-1/5  px-3 py-2 text-center'>Price</div>
            </div> */}
            <div className='flex flex-row justify-between'>
              <h2 className='header-2'>Cart</h2>
              <button className=''>Remove</button>
            </div>
            <table className='border-collapsed'>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>

          <div className='basis-1/3 font-medium rounded-lg shadow-xl p-8 ring-1 ring-secondary-500/5 '>
            <div className='flex flex-col space-y-4'>
              <div className='flex flex-row justify-between'>
                <span className='text-dark-400'>Subtotal</span>
                <span className='text-dark-700'>&#8369;0</span>
              </div>

              <div className='flex flex-row justify-between'>
                <span className='text-dark-400'>Discount</span>
                <span className='text-dark-700'>&#8369;0</span>
              </div>

              <hr className='h-px rounded-xl my-8 bg-secondary-900/30 border-0' />

              <div className='flex flex-row justify-between'>
                <span className='text-dark-500'>Grand Total</span>
                <span className='text-dark-700'>&#8369;0</span>
              </div>

              <div>
                <button className='button | bg-secondary-800 w-full'>Checkout now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart
