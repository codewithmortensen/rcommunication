import products from '@/app/data/products';
import ProductDetail from './components/ProductDetail';
import { Overview } from './components/OverView';

interface Props {
  params: { id: string };
}

const EmployeeDetailPage = ({ params: { id } }: Props) => {
  return (
    <div className='grid grid-cols-2 gap-10  mt-20 mx-[3rem]'>
      <ProductDetail />
      <Overview />
    </div>
  );
};

export default EmployeeDetailPage;
