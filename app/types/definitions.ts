export type Product = {
  productID: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  createdAt: Date;
  lastUpdate: Date;
  collection: string;
};

export type Collection = {
  collectionId: string;
  name: string;
  slug: string;
};
