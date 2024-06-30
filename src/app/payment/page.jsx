import React from "react";
import { SiPhonepe } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="min-h-screen flex items-center">
      <Card className="w-[90%] max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Pay using UPI</CardTitle>
          <CardDescription>
            Complete your payment securely.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="upi id">UPI ID</Label>
              <Input id="name" placeholder="abc@axl" />
            </div>
            <div className="flex flex-col items-center justify-between gap-6">
              <Button
                type="submit"
                className="w-full bg-purple-900 flex items-center hover:bg-purple-800"
                size='lg'
              >
                Continue with <SiPhonepe className="text-lg mx-2" />
              </Button>
              <Button type="submit" className="w-full" size='lg'>
                Continue with <FcGoogle className="text-xl mx-2" /> Pay
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
