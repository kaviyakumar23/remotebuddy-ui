"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ErrorMessage, FieldArray, FormikProps } from "formik";
import { Button } from "@/components/ui/button";
import { FormValues } from "./formschema";

export default function SkillsForm(props: FormikProps<FormValues>) {
  const values = { skills: [], interests: [] };

  const { setFieldValue } = props;
  return (
    <>
      <FieldArray name="skills">
        {({ push, remove }) => (
          <div>
            <Label>Skills</Label>
            {values?.skills.map((skill, index) => (
              <div key={index} className="flex mt-1 space-x-2">
                <Input name={`skills.${index}`} value={skill} onChange={(e) => setFieldValue(`skills.${index}`, e.target.value)} />
                <Button type="button" variant="outline" onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" onClick={() => push("")} className="mt-2">
              Add Skill
            </Button>
            <ErrorMessage name="skills" component="div" className="text-sm text-red-500" />
          </div>
        )}
      </FieldArray>

      <FieldArray name="interests">
        {({ push, remove }) => (
          <div>
            <Label>Interests</Label>
            {values.interests.map((interest, index) => (
              <div key={index} className="flex mt-1 space-x-2">
                <Input name={`interests.${index}`} value={interest} onChange={(e) => setFieldValue(`interests.${index}`, e.target.value)} />
                <Button type="button" variant="outline" onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" onClick={() => push("")} className="mt-2">
              Add Interest
            </Button>
            <ErrorMessage name="interests" component="div" className="text-sm text-red-500" />
          </div>
        )}
      </FieldArray>
    </>
  );
}
