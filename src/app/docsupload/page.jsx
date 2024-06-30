"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      setSelectedFile(null); // Clear selection if not PDF
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-24">
      <Card className="w-[90%] md:max-w-3xl">
        <CardHeader>
          <CardTitle>Upload Document</CardTitle>
          <CardDescription>
            Select a document to upload and choose your print options.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col md:flex-row justify-between gap-5">
            <div className="w-auto flex flex-col gap-6">
              <div className="w-full grid gap-2">
                <Label htmlFor="file">
                  Upload File{" "}
                  <span className="text-muted-foreground mx-1 text-xs">
                    (use pdf for better print quality)
                  </span>
                </Label>
                <Input
                  id="file"
                  type="file"
                  className="w-full"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </div>
              {selectedFile && (
                <div>
                  <iframe
                    src={URL.createObjectURL(selectedFile)}
                    width="auto"
                    height="300px"
                    className="hidden sm:flex"
                  ></iframe>
                </div>
              )}
            </div>

            <div className="md:w-2/3 flex flex-col gap-6">
              <div className="grid gap-2">
                <Label>Paper Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select paper size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="letter">Letter (8.5 x 11 in)</SelectItem>
                    <SelectItem value="legal">Legal (8.5 x 14 in)</SelectItem>
                    <SelectItem value="a4">A4 (210 x 297 mm)</SelectItem>
                    <SelectItem value="a3">A3 (297 x 420 mm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 ">
                <Label>Paper Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select paper type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plain">Plain</SelectItem>
                    <SelectItem value="glossy">Bond</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Pages per sheet</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="letter">1</SelectItem>
                    <SelectItem value="legal">2</SelectItem>
                    <SelectItem value="a4">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <RadioGroup defaultValue="color" className="flex gap-2 md:w-1/2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Monochrome</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Color</Label>
                </div>
              </RadioGroup>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link href={"/payment"}>
            <Button type="submit">Continue</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
