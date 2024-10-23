import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // Fetch product details using the id from params
  // For now, we'll use dummy data
  const product = {
    id: params.id,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 99.99,
    stock: 50,
    category: "Electronics"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{product.description}</p>
        <p className="mb-2"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p className="mb-2"><strong>Stock:</strong> {product.stock}</p>
        <p className="mb-4"><strong>Category:</strong> {product.category}</p>
        <Button>Edit Product</Button>
      </CardContent>
    </Card>
  );
}

