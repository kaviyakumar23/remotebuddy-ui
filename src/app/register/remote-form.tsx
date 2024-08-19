"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ErrorMessage, FormikProps } from "formik";
import { FormValues } from "./formschema";

export default function RemoteInfoForm(props: FormikProps<FormValues>) {
  const { setFieldValue } = props;
  return (
    <>
      <div>
        <Label htmlFor="remoteWorkStatus">Remote Work Status</Label>
        <Select name="remoteWorkStatus" onValueChange={(value) => setFieldValue("remoteWorkStatus", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select remote work status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-remote">Full Remote</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
            <SelectItem value="office-based">Office Based</SelectItem>
          </SelectContent>
        </Select>
        <ErrorMessage name="remoteWorkStatus" component="div" className="text-sm text-red-500" />
      </div>

      <div>
        <Label htmlFor="yearsRemoteExperience">Years of Remote Experience</Label>
        <Input
          id="yearsRemoteExperience"
          name="yearsRemoteExperience"
          type="number"
          onChange={(e) => setFieldValue("yearsRemoteExperience", parseInt(e.target.value))}
        />
        <ErrorMessage name="yearsRemoteExperience" component="div" className="text-sm text-red-500" />
      </div>

      <div>
        <Label htmlFor="preferredWorkHours">Preferred Work Hours</Label>
        <Select name="preferredWorkHours" onValueChange={(value) => setFieldValue("preferredWorkHours", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select preferred work hours" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="early-bird">Early Bird</SelectItem>
            <SelectItem value="night-owl">Night Owl</SelectItem>
            <SelectItem value="regular">Regular Hours</SelectItem>
          </SelectContent>
        </Select>
        <ErrorMessage name="preferredWorkHours" component="div" className="text-sm text-red-500" />
      </div>
    </>
  );
}
