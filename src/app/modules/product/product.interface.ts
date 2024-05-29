export type Variant = {
  types: string;
  values: string | number;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};
export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant;
  inventory: Inventory;
};
