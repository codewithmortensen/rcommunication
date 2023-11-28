export const formatted = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat('fr-HT', {
    style: 'currency',
    currency: 'HTG',
  }).format(amount);
  return formattedAmount;
};
