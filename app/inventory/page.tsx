import ProductTable from './components/ProductTable';
import { columns } from './components/Columns';
import products from '../data/products';

const InventoryPage = () => {
  return (
    <div className='max-w-screen-lg mx-auto my-[5rem]'>
      <ProductTable columns={columns} data={products} />
    </div>
  );
};

export default InventoryPage;
