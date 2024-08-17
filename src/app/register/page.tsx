import { Avatar } from "@/components/avatar";
import { Heading, Subheading } from "@/components/heading";
import { SidebarLabel } from "@/components/sidebar";
import { Text } from "@/components/text";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="h-screen p-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar src="/logos/remote-buddy-color.svg" />
            <SidebarLabel className="text-lg font-semibold">Remote Buddy</SidebarLabel>
          </div>
          <div className="flex items-center gap-2">
            <Text>Already a member?</Text>
            <Link className="text-custom-text font-semibold" href={"/login"}>
              Login
            </Link>
          </div>
        </div>

        <div className="h-full flex flex-col items-center justify-center gap-4">
          <Heading level={1}>Let’s Get to Know You Better!</Heading>
          <Text className="text-lg">
            We&apos;ll guide you through a few steps to create your ideal experience. Let&apos;s get everything just right.{" "}
          </Text>
        </div>
      </div>
    </>
  );
}
