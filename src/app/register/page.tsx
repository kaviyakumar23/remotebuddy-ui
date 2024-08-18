import RegistrationHeader from "./header";
import FormLayout from "./form-layout";

export default function Register() {
  return (
    <>
      <div className="h-screen overflow-hidden p-7">
        <RegistrationHeader />
        <FormLayout />
      </div>
    </>
  );
}
