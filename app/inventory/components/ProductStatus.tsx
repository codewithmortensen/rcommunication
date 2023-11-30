import { Badge } from '@/components/ui/badge';
import { cn } from '@/libs/utils';

const ProductStatus = ({ stock }: { stock: number }) => {
  const status =
    stock === 0 ? 'Out of Stock' : stock <= 100 ? 'Low Stock' : 'In Stock';

  const variant =
    status === 'In Stock'
      ? 'bg-green-500'
      : status === 'Low Stock'
      ? 'bg-yellow-500'
      : 'bg-red-600';
  return (
    <Badge className={cn('rounded-sm text-xs font-light', variant)}>
      {status}
    </Badge>
  );
};

export default ProductStatus;
