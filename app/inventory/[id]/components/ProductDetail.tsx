'use client';
import products from '@/app/data/products';
import { useParams } from 'next/navigation';
import ProductStatus from '../../components/ProductStatus';

const ProductDetail = () => {
  const params = useParams();
  const product = products.find((product) => product.productID === params.id);

  return (
    <div className='overflow-hidden sm:rounded-lg'>
      <div className='px-4  sm:px-6'>
        <h1 className='text-lg font-bold py-3 tracking-normal sm:text-3xl xl:text-3xl/none bg-clip-text text-center text-transparent bg-gradient-to-r from-gray-300 to-gray-500'>
          Product Detail
        </h1>
      </div>
      <div className='border-t '>
        <dl>
          <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
            <dt className='text-sm font-medium'>Product ID</dt>
            <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
              {product?.productID}
            </dd>
          </div>
          <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
            <dt className='text-sm font-medium'>Product Title</dt>
            <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
              {product?.name}
            </dd>
          </div>
          <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
            <dt className='text-sm font-medium'>Price</dt>
            <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
              {product?.price} Gourdes
            </dd>
          </div>
          <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
            <dt className='text-sm font-medium'>Category</dt>
            <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
              {product?.collection}
            </dd>
          </div>
          <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
            <dt className='text-sm font-medium'>Quantity In Stock</dt>
            <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
              {product?.stock}
            </dd>
          </div>
          <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
            <dt className='text-sm font-medium'>Inventory Status</dt>
            <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
              <ProductStatus stock={product?.stock!} />
            </dd>
          </div>
          <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
            <dt className='text-sm font-medium'>Last Update</dt>
            <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
              {product?.lastUpdate.toDateString()}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProductDetail;
