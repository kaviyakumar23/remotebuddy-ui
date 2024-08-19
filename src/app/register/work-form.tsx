"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ErrorMessage, FormikProps } from "formik";
import { FormValues } from "./formschema";

export default function WorkInfoForm(props: FormikProps<FormValues>) {
  const { setFieldValue } = props;
  return (
    <>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" onChange={(e) => setFieldValue("company", e.target.value)} />
        <ErrorMessage name="company" component="div" className="text-sm text-red-500" />
      </div>
      <div>
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input id="jobTitle" name="jobTitle" onChange={(e) => setFieldValue("jobTitle", e.target.value)} />
        <ErrorMessage name="jobTitle" component="div" className="text-sm text-red-500" />
      </div>
      <div>
        <Label htmlFor="industry">Industry</Label>
        <Select name="industry" onValueChange={(value) => setFieldValue("industry", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select an industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <ErrorMessage name="industry" component="div" className="text-sm text-red-500" />
      </div>
    </>
  );
}
