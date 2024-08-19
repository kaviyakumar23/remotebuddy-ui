"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, FormikProps } from "formik";
import { FormValues } from "./formschema";

export default function BasicsForm(props: FormikProps<FormValues>) {
  const { setFieldValue } = props;
  return (
    <>
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" name="fullName" onChange={(e) => setFieldValue("fullName", e.target.value)} />
        <ErrorMessage name="fullName" component="div" className="text-sm text-red-500" />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" onChange={(e) => setFieldValue("email", e.target.value)} />
        <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
      </div>

      <div>
        <Label htmlFor="country">Country</Label>
        <Input id="country" name="country" onChange={(e) => setFieldValue("country", e.target.value)} />
        <ErrorMessage name="country" component="div" className="text-sm text-red-500" />
      </div>

      <div>
        <Label htmlFor="city">City (Optional)</Label>
        <Input id="city" name="city" onChange={(e) => setFieldValue("city", e.target.value)} />
        <ErrorMessage name="city" component="div" className="text-sm text-red-500" />
      </div>

      <div>
        <Label htmlFor="timeZone">Time Zone</Label>
        <Input id="timeZone" name="timeZone" onChange={(e) => setFieldValue("timeZone", e.target.value)} />
        <ErrorMessage name="timeZone" component="div" className="text-sm text-red-500" />
      </div>
    </>
  );
}
