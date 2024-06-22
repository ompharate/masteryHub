import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CoursesList from "@/components/creator/CoursesList";

const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Create a Course</CardTitle>
              <CardDescription>on MasteryHub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input placeholder="Course Name" />
                <Button>Create</Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-slate-500">You can edit your course on course dashboard.</p>
            </CardFooter>
          </Card>
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-xl font-semibold pt-4">Courses that you have created</h1>
          </div>
          <div className="p-4">
              <CoursesList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
