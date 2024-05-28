import { Schema, model, connect } from 'mongoose';

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
  tags:
    | 'office'
    | 'furniture'
    | 'ergonomic'
    | 'adjustable'
    | 'audio'
    | 'earbuds'
    | 'wireless'
    | 'noise-cancelling'
    | 'meditation'
    | 'cushion'
    | 'organic'
    | 'comfortable'
    | 'running'
    | 'shoes'
    | 'trail'
    | 'durable'
    | 'kitchen'
    | 'appliance'
    | 'blender'
    | 'high-speed'
    | 'gaming'
    | 'headset'
    | 'surround sound'
    | 'over-ear'
    | 'fitness'
    | 'tracker'
    | 'wearable'
    | 'waterproof'
    | 'charging case'
    | 'tablet'
    | 'mobile'
    | 'high-resolution'
    | '256GB'
    | 'cooking'
    | 'air fryer';
  variants: Variant;
  inventory: Inventory;
};
