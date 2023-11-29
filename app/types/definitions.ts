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

export type Employee = {
  employeeID: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: 'Male' | 'Female';
  phone: string;
  address: string;
  jobTitle: string;
  status: string;
  salary: number;
};

// todo catch the employee email address
