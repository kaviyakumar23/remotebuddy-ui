"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormikProps } from "formik";
import { Button } from "@/components/ui/button";
import { FormValues } from "./formschema";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { X } from "lucide-react";

const existingOptions = {
  skills: [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "TypeScript",
    "React",
    "Next.js",
    "Remix",
    "Node.js",
    "Angular",
    "Vue.js",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "Data Analysis",
    "Git",
    "CI/CD",
    "RESTful APIs",
    "GraphQL",
    "Microservices",
    "Serverless",
    "TensorFlow",
    "PyTorch",
  ],
  interests: [
    "Artificial Intelligence",
    "Blockchain",
    "Cloud Computing",
    "Cybersecurity",
    "DevOps",
    "Internet of Things (IoT)",
    "Big Data",
    "Augmented Reality (AR) / Virtual Reality (VR)",
    "Quantum Computing",
    "5G Technology",
    "Edge Computing",
    "Robotics",
  ],
  hobbies: [
    "Coding side projects",
    "Competitive programming",
    "Contributing to open source",
    "Building PCs",
    "3D printing",
    "Gaming",
    "Game development",
    "Raspberry Pi projects",
    "Arduino tinkering",
    "Tech blogging",
    "Attending hackathons",
    "Podcasting about tech",
  ],
};
interface ChipProps extends React.ComponentPropsWithoutRef<typeof Badge> {
  onClose: () => void;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(({ children, onClose, ...props }, ref) => {
  return (
    <Badge variant="secondary" className="mr-2 mb-2" {...props}>
      {children}
      <X className="ml-2 h-4 w-4 cursor-pointer" onClick={onClose} />
    </Badge>
  );
});
Chip.displayName = "Chip";

interface ChipInputProps {
  label: string;
  name: string;
  options: string[];
  values: any;
  setFieldValue: (field: string, value: any) => void;
  setFieldTouched: (field: string, isTouched?: boolean) => void;
}

const ChipInput: React.FC<ChipInputProps> = ({ label, name, options, values, setFieldValue, setFieldTouched }) => {
  const [input, setInput] = useState<string>("");

  // Ensure that values[name] is an array, if not, initialize it
  const currentValues = Array.isArray(values[name]) ? values[name] : [];

  const addChip = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue && !currentValues.includes(trimmedValue)) {
      setFieldValue(name, [...currentValues, trimmedValue]);
      setFieldTouched(name, true);
      setInput("");
    }
  };

  const removeChip = (value: string) => {
    setFieldValue(
      name,
      currentValues.filter((item: string) => item !== value)
    );
    setFieldTouched(name, true);
  };

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(input.toLowerCase()) && !currentValues.includes(option));

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2 mb-2">
        {currentValues.filter(Boolean).map((item: string) => (
          <Chip key={item} onClose={() => removeChip(item)}>
            {item}
          </Chip>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          placeholder={`Add ${label.toLowerCase()}...`}
          onKeyPress={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addChip(input);
            }
          }}
        />
        <Button type="button" onClick={() => addChip(input)}>
          Add
        </Button>
      </div>
      {input && (
        <ScrollArea className="h-32 w-full rounded-md border">
          <div className="p-2">
            {filteredOptions.map((option) => (
              <div key={option} className="cursor-pointer p-2 hover:bg-slate-100" onClick={() => addChip(option)}>
                {option}
              </div>
            ))}
            {filteredOptions.length === 0 && <div className="p-2 text-slate-500">No matching options. Press Enter to add new.</div>}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};
export default function SkillsForm(props: FormikProps<FormValues>) {
  const { values, setFieldValue, setFieldTouched } = props;
  return (
    <div className="space-y-6">
      <ChipInput
        label="Skills"
        name="skills"
        options={existingOptions.skills}
        values={values}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
      />
      <ChipInput
        label="Interests"
        name="interests"
        options={existingOptions.interests}
        values={values}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
      />
      <ChipInput
        label="Hobbies"
        name="hobbies"
        options={existingOptions.hobbies}
        values={values}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
      />
    </div>
  );
}
