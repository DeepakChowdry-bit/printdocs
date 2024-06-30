/**
 * v0 by Vercel.
 * @see https://v0.dev/t/76gqvDCBsum
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MdSort } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const page = () => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "Brochure Design.pdf",
      user: "John Doe",
      paperSize: "A4",
      color: "Color",
      pps: '1',
      quantity: 50,
      status: "Pending",
      createdAt: "2023-04-15",
    },
    {
      id: 2,
      name: "Annual Report.docx",
      user: "Jane Smith",
      paperSize: "Letter",
      color: "B&W",
      pps: '2',
      quantity: 100,
      status: "Printed",
      createdAt: "2023-05-20",
    },
    {
      id: 3,
      name: "Product Catalog.indd",
      user: "Michael Johnson",
      paperSize: "A3",
      color: "Color",
      pps: '2',
      quantity: 75,
      status: "Delivered",
      createdAt: "2023-03-01",
    },
    {
      id: 4,
      name: "Flyer Design.psd",
      user: "Emily Brown",
      paperSize: "A5",
      color: "Color",
      pps: '1',
      quantity: 25,
      status: "Pending",
      createdAt: "2023-06-10",
    },
    {
      id: 5,
      name: "Presentation Slides.pptx",
      user: "David Lee",
      paperSize: "Letter",
      color: "B&W",
      pps: '1',
      quantity: 150,
      status: "Printed",
      createdAt: "2023-05-01",
    },
    {
        id: 6,
        name: "Resume.pdf",
        user: "Aayush Lee",
        paperSize: "A4",
        color: "color",
        pps: '2',
        quantity: 1,
        status: "Delivered",
        createdAt: "2023-05-01",
      },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const filteredFiles = useMemo(() => {
    return files
      .filter(
        (file) =>
          file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          file.user.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "date") {
          if (new Date(a.createdAt) < new Date(b.createdAt))
            return sortOrder === "asc" ? -1 : 1;
          if (new Date(a.createdAt) > new Date(b.createdAt))
            return sortOrder === "asc" ? 1 : -1;
        } else {
          if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
          if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
  }, [files, searchTerm, sortBy, sortOrder]);

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };
  const totalPrints = files.reduce((acc, file) => acc + file.quantity, 0);
  const pendingFiles = files.filter((file) => file.status === "Pending");
  const printingFiles = files.filter((file) => file.status === "Printing");
  const completedFiles = files.filter((file) => file.status === "Completed");
  return (
    <div className="flex flex-col min-h-screen py-24 items-center">
      <main className="flex-1 p-6 w-full md:w-[95%]">
        <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Print Jobs</h1>
            <Badge variant="secondary" className="px-3 py-1 text-sm">
              {filteredFiles.length} files
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="search"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <MdSort className="w-4 h-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup
                  value={sortBy}
                  onValueChange={handleSort}
                >
                  <DropdownMenuRadioItem value="name">
                    File Name
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="user">
                    User
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="status">
                    Status
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="date">
                    Date
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Color</TableHead>
                <TableHead className='text-center'>PPS</TableHead>
                <TableHead className='text-center'>Quantity</TableHead>
                <TableHead className='text-center'>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFiles.map((file) => (
                <TableRow key={file.id} >
                  <TableCell className="font-medium">{file.name}</TableCell>
                  <TableCell>{file.user}</TableCell>
                  <TableCell>{file.paperSize}</TableCell>
                  <TableCell>{file.color}</TableCell>
                  <TableCell className='text-center'>{file.pps}</TableCell>
                  <TableCell className='text-center'>{file.quantity}</TableCell>
                  <TableCell className='text-center'>
                    <Badge
                      variant={
                        file.status === "Pending"
                          ? "outline"
                          : file.status === "Printing"
                          ? "secondary"
                          : "success"
                      }
                    >
                      {file.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-label="More options"
                          size="icon"
                          variant="ghost"
                        >
                          <IoIosOptions className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <div className="my-6">
          <Card>
            <CardHeader>
              <CardTitle>Print Analytics</CardTitle>
              <CardDescription>
                Overview of your print performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold opacity-70">Total</h3>
                  <div className="text-4xl font-bold">{totalPrints}</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold opacity-70">Pending</h3>
                  <div className="text-4xl font-bold">
                    {pendingFiles.length}
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold opacity-70">Printing</h3>
                  <div className="text-4xl font-bold">
                    {printingFiles.length}
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold opacity-70">Completed</h3>
                  <div className="text-4xl font-bold">
                    {completedFiles.length}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default page;
