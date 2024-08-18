"use client";

import { Heading } from "@/components/heading";
import { Text } from "@/components/text";

const steps = [
  { title: "Basics", description: "Quick intro - who are you?", quote: "We promise not to spam you or sell your info to aliens." },
  { title: "Work Info", description: "Your professional side", quote: "Tell us a bit about your 9-to-5 (or 10-to-6, or whatever floats your boat)." },
  { title: "Remote Life", description: "Your WFH style", quote: "Are you a work-from-home wizard or just dipping your toes in the remote waters?" },
  { title: "Skills & Interests", description: "What you do & love", quote: "What are you awesome at? What makes you tick?" },
  {
    title: "Meeting Preferences",
    description: "How you like to connect",
    quote: "Let's sync up on how you like to connect with fellow remote warriors.",
  },
  { title: "Bio", description: "You in a nutshell", quote: "Give us your elevator pitch! Or your Netflix bio, whichever's cooler." },
];

export default function FormLayout() {
  return (
    <div className="h-full flex flex-col items-center justify-start gap-4 pt-10">
      <Heading level={1}>Let’s Get to Know You Better!</Heading>
      <Text className="text-lg">
        We&apos;ll guide you through a few steps to create your ideal experience. Let&apos;s get everything just right.{" "}
      </Text>
      <div className="w-full py-5 overflow-x-auto"></div>
      <div></div>
    </div>
  );
}
