import { Schema, model, connect } from 'mongoose';
import { Inventory, Product, Variant } from './product/product.interface';

const variantsSchema = new Schema<Variant>({
  types: {
    type: String,
    required: true,
  },
  values: {
    type: String,
    required: true,
  },
});
const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});
const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    enum: [
      'office',
      'furniture',
      'ergonomic',
      'adjustable',
      'audio',
      'earbuds',
      'wireless',
      'noise-cancelling',
      'meditation',
      'cushion',
      'organic',
      'comfortable',
      'running',
      'shoes',
      'trail',
      'durable',
      'kitchen',
      'appliance',
      'blender',
      'high-speed',
      'gaming',
      'headset',
      'surround sound',
      'over-ear',
      'fitness',
      'tracker',
      'wearable',
      'waterproof',
      'charging case',
      'tablet',
      'mobile',
      'high-resolution',
      '256GB',
      'cooking',
      'air fryer',
    ],
  },
  variants: variantsSchema,
  inventory: inventorySchema,
});

const Product = model<Product>('Product', productSchema);
