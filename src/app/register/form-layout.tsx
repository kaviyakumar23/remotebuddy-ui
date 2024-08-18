"use client";

import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const steps = [
  { title: "Basics", description: "We promise not to spam you or sell your info to aliens." },
  { title: "Work Info", description: "Tell us a bit about your 9-to-5 (or 10-to-6, or whatever floats your boat)." },
  { title: "Remote Life", description: "Are you a work-from-home wizard or just dipping your toes in the remote waters?" },
  { title: "Skills & Interests", description: "What are you awesome at? What makes you tick?" },
  { title: "Meeting Preferences", description: "Let's sync up on how you like to connect with fellow remote warriors." },
  { title: "Bio", description: "Give us your elevator pitch! Or your Netflix bio, whichever's cooler." },
];

const BasicsForm = () => <div>Basics Form</div>;
const WorkInfoForm = () => <div>Work Info Form</div>;
const RemoteLifeForm = () => <div>Remote Life Form</div>;
const SkillsInterestsForm = () => <div>Skills & Interests Form</div>;
const MeetingPreferencesForm = () => <div>Meeting Preferences Form</div>;
const BioForm = () => <div>Bio Form</div>;

const stepComponents = [BasicsForm, WorkInfoForm, RemoteLifeForm, SkillsInterestsForm, MeetingPreferencesForm, BioForm];

export default function FormLayout() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = stepComponents[currentStep];
  return (
    <div className="h-full flex flex-col items-center justify-start gap-4 pt-10">
      <Heading level={1}>Let’s Get to Know You Better!</Heading>
      <Text className="text-lg">
        We&apos;ll guide you through a few steps to create your ideal experience. Let&apos;s get everything just right.{" "}
      </Text>
      <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
        <Progress value={(currentStep / (steps.length - 1)) * 100} className="w-full" />

        <div className="text-center">
          <h2 className="text-2xl font-bold">{steps[currentStep].title}</h2>
          <p className="text-gray-600">{steps[currentStep].description}</p>
        </div>
        <CurrentStepComponent />
        <div className="flex justify-between">
          <Button onClick={prevStep} disabled={currentStep === 0}>
            Previous
          </Button>
          <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
