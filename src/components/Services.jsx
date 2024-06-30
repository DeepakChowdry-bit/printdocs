import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Home = () => {
  return (
    <div className="">
      <section className="w-full flex justify-center items-center py-12  bg-background min-h-[60vh]">
        <div className="container px-4 md:px-6 flex justify-center gap-8 items-center w-[95%]">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              LOGO
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Upload your documents and get them printed and delivered to your
              doorstep.
            </p>
            <Link
              href={"/docsupload"}
              className="inline-flex items-center gap-2"
              prefetch={false}
            >
              <Button variant="primary" className='bg-muted'>Upload Document</Button>
              <span className="text-muted-foreground">Start Printing</span>
            </Link>
          </div>
        </div>
      </section>
      <main className="flex flex-col md:flex-row items-center justify-center w-full md:gap-10">
        <section className="w-full md:w-2/5 py-8 md:py-12 bg-muted h-full">
          <div className="container px-4 md:px-6 items-center w-[95%]">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Reliable Printing Services
              </h2>
              <p className="text-muted-foreground md:text-xl md:text-justify">
                We offer a wide range of printing services to meet your needs.
              </p>
              <ul className="flex flex-col gap-6 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  High-quality printing
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  Fast turnaround times
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  Affordable pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  Secure document handling
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full md:w-2/5 py-6 md:py-12 bg-muted h-full">
          <div className="container px-4 md:px-6 items-center w-[95%]">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Transparent Pricing and Delivery
              </h2>
              <p className="text-muted-foreground md:text-xl">
                We offer competitive pricing with fast and reliable delivery.
              </p>
              <ul className="flex flex-col gap-6 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  Affordable per-page pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  Free shipping on orders over $50
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  Delivery within 3-5 business days
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  Tracking and status updates
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 w-[95%]">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-balance md:text-4xl/tight">
              Get Started Today
            </h2>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Get Started</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Sign up to start printing your documents.{" "}
              <Link
                href="#"
                className="underline underline-offset-2"
                prefetch={false}
              >
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function PrinterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  );
}

export default Home;
