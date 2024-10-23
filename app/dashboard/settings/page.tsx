import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Store Name</label>
              <Input id="storeName" defaultValue="My Awesome Store" />
            </div>
            <div>
              <label htmlFor="storeEmail" className="block text-sm font-medium text-gray-700">Store Email</label>
              <Input id="storeEmail" type="email" defaultValue="contact@myawesomestore.com" />
            </div>
            <div>
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
              <Input id="currency" defaultValue="USD" />
            </div>
            <Button>Save Changes</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
              <Input id="currentPassword" type="password" />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
              <Input id="newPassword" type="password" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <Input id="confirmPassword" type="password" />
            </div>
            <Button>Update Password</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
