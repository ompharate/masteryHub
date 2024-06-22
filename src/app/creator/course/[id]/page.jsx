"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MdOutlineStarRate } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { FaImage } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CourseEditPage = (props) => {
  console.log(props);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile &&
      (selectedFile.type === "image/png" || selectedFile.type === "image/jpeg")
    ) {
      setFile(URL.createObjectURL(selectedFile));
    } else {
      alert("Please select a PNG or JPG file.");
    }
  };

  return (
    <div>
      <div className="flex max-w-[80%] mx-auto rounded-lg gap-10">
        <div className="mx-auto flex-1  p-12 gap-10 bg-slate-100 ">
          <h1 className="text-2xl font-semibold">Java full stack</h1>
          <div className="flex gap-10 p-2">
            <div className="w-full max-w-md bg-white rounded-lg p-6">
              <h1 className="text-2xl font-semibold mb-4 text-center">
                Thumbnail image
              </h1>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
              />
              <label
                htmlFor="file-input"
                className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {file ? (
                  <img src={file} alt="Preview" className="max-h-48" />
                ) : (
                  <div className="text-center">
                    <RiImageAddFill className="w-12 h-12 mx-auto text-gray-400" />
                    <p className="mt-2 text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      PNG, JPG (max 2MB)
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className="flex gap-10 p-2">
            <Input placeholder="Enter title of the course" />
            <Input placeholder="Enter the price" />
          </div>
          <div className="flex gap-10 p-2 ">
            <Textarea placeholder="Enter the description" />
          </div>
          <div>
            <Button className="float-right">update</Button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-1 bg-slate-100 w-[250px] p-2 h-[300px]">
            {file ? (
              <img width={300} height={300} src={file} />
            ) : (
              <FaImage className="mx-auto" size={30} />
            )}
            <h1 className="font-bold text-wrap">
              JavaScript Algorithms and Data Structures Masterclass
            </h1>
            <p>karan mohite</p>
            <p className="flex">
              <MdOutlineStarRate color="gold" />
              <MdOutlineStarRate color="gold" />
              <MdOutlineStarRate color="gold" />
              <MdOutlineStarRate color="gold" />
              <MdOutlineStarRate />
            </p>
            <h3>
              ₹399 <strike className="text-gray-500 text-sm">3999</strike>{" "}
            </h3>
            <Button>Buy</Button>
          </div>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto rounded-lg  mt-10">
        <div className="flex items-center  bg-slate-100 p-12">
          <div className="w-full max-w-md bg-white  rounded-lg p-8">
            <h1 className="text-2xl font-semibold mb-4 text-center">
              Lecture file
            </h1>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {file ? (
                <img src={file} alt="Preview" className="max-h-48" />
              ) : (
                <div className="text-center">
                  <FaFileVideo className="w-12 h-12 mx-auto text-gray-400" />
                  <p className="mt-2 text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    MP3, MP4 (max 100MB)
                  </p>
                </div>
              )}
            </label>
          </div>
          <div className="p-2 flex-1">
            <Input placeholder="Title of the video" />
            <Button className="float-right m-2"><IoCloudUploadOutline /></Button>
          </div>
        </div>

        <div className="bg-slate-100 mt-10 mb-10 p-12 ">
          <Table>
            <TableCaption>A list of your recent lectures.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Video</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>
                  <Button>
                    <MdOutlineSlowMotionVideo />
                  </Button>
                </TableCell>

                <TableCell>12/5/6</TableCell>
                <TableCell>
                  <Button variant="destructive">
                    <MdDeleteOutline />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CourseEditPage;
