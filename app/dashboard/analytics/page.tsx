import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sales chart will be displayed here</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Traffic sources chart will be displayed here</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top Products</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Top products list will be displayed here</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer Demographics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Customer demographics chart will be displayed here</p>
        </CardContent>
      </Card>
    </div>
  );
}
