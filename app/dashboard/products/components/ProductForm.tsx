import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ProductFormProps = {
  product?: {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
  };
  onSubmit: (product: any) => void;
};

export default function ProductForm({ product, onSubmit }: ProductFormProps) {
  const [formData, setFormData] = React.useState(product || {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product ? 'Edit Product' : 'Add New Product'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
          />
          <Input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <Input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <Input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
          />
          <Input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <Button type="submit">
            {product ? 'Update Product' : 'Add Product'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

