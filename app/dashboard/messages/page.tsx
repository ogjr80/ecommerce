import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const dummyMessages = [
  { id: 1, from: 'John Doe', subject: 'Order Inquiry', date: '2023-05-01', status: 'Unread' },
  { id: 2, from: 'Jane Smith', subject: 'Return Request', date: '2023-05-02', status: 'Read' },
  { id: 3, from: 'Bob Johnson', subject: 'Product Question', date: '2023-05-03', status: 'Unread' },
  { id: 4, from: 'Alice Brown', subject: 'Shipping Delay', date: '2023-05-04', status: 'Read' },
];

export default function MessagesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>From</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyMessages.map((message) => (
              <TableRow key={message.id}>
                <TableCell>{message.from}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>{message.date}</TableCell>
                <TableCell>{message.status}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
