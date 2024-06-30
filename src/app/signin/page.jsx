"use client";
import React from "react";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background py-24">
      <div className="w-full max-w-lg flex flex-col items-center space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {isSignUp
              ? "Create your account to get started"
              : "Welcome back! Sign in to your account"}
          </p>
        </div>
        <Card className="pt-6 w-[90%]">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="daniel"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-between gap-4">
            <Button type="submit" className="w-full">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <Button size='lg' variant="outline" className="w-full">
              Continue with <FcGoogle className="mx-2 text-xl"/>
            </Button>
          </CardFooter>
        </Card>
        <div className="text-center text-sm text-muted-foreground">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="font-medium text-primary hover:underline"
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                className="font-medium text-primary hover:underline"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
