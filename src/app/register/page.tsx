"use client";
import RegistrationHeader from "./header";
import FormLayout from "./form-layout";

export default function Register() {
  return (
    <>
      <div className="h-screen p-7">
        <RegistrationHeader />
        <FormLayout />
      </div>
    </>
  );
}
