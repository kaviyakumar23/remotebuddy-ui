"use client";

import { Label } from "@/components/ui/label";
import { ErrorMessage, FieldArray, FormikProps } from "formik";
import { Checkbox } from "@/components/ui/checkbox";
import { FormValues } from "./formschema";
import { Textarea } from "@/components/ui/textarea";

export default function BioForm(props: FormikProps<FormValues>) {
  const { values, setFieldValue } = props;
  return (
    <>
      <div className="space-y-4">
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            value={values.bio}
            onChange={(e) => setFieldValue("bio", e.target.value)}
            placeholder="Give us your elevator pitch! Or your Netflix bio, whichever's cooler."
            className="min-h-[150px]"
          />
          <ErrorMessage name="bio" component="div" className="text-sm text-red-500" />
        </div>
      </div>
    </>
  );
}
