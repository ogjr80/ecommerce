import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const dummyOrders = [
  { id: 1001, customer: "John Doe", date: "2023-05-01", total: 299.99, status: "Completed" },
  { id: 1002, customer: "Jane Smith", date: "2023-05-02", total: 149.99, status: "Processing" },
  { id: 1003, customer: "Bob Johnson", date: "2023-05-03", total: 89.99, status: "Shipped" },
  { id: 1004, customer: "Alice Brown", date: "2023-05-04", total: 199.99, status: "Pending" },
];

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={order.status === 'Completed' ? 'success' : 'default'}>
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
