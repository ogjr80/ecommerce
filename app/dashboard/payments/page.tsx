import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const dummyPayments = [
  { id: 'PAY001', date: '2023-05-01', amount: 299.99, method: 'Credit Card', status: 'Completed' },
  { id: 'PAY002', date: '2023-05-02', amount: 149.99, method: 'PayPal', status: 'Pending' },
  { id: 'PAY003', date: '2023-05-03', amount: 89.99, method: 'Bank Transfer', status: 'Completed' },
  { id: 'PAY004', date: '2023-05-04', amount: 199.99, method: 'Credit Card', status: 'Failed' },
];

export default function PaymentsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payment ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>${payment.amount.toFixed(2)}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      payment.status === 'Completed' ? 'success' : 
                      payment.status === 'Pending' ? 'warning' : 
                      'destructive'
                    }
                  >
                    {payment.status}
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
