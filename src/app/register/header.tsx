"use client";
import { Avatar } from "@/components/avatar";
import { SidebarLabel } from "@/components/sidebar";
import Link from "next/link";
import { Text } from "@/components/text";
import useBreakpointCheck from "@/hooks/useBreakPointCheck";

export default function RegistrationHeader() {
  const { isGreaterThan } = useBreakpointCheck();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Avatar src="/logos/remote-buddy-color.svg" />
        <SidebarLabel className="text-lg font-semibold">Remote Buddy</SidebarLabel>
      </div>
      <div className="flex items-center gap-2">
        {isGreaterThan("mobile") && <Text>Already a member?</Text>}
        <Link className="text-custom-text font-semibold" href={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
}
