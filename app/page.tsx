import products from './data/products';
import { columns } from './inventory/components/Columns';
import ProductTable from './inventory/components/ProductTable';

const HomePage = () => {
  return (
    <div className='max-w-screen-lg mx-auto my-10'>
      <ProductTable columns={columns} data={products} />
    </div>
  );
};

export default HomePage;
