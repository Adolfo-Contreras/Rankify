import { NavbarComponent } from "@/components/Navbar";
import LoginForm from "@/components/loginForm";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function LoginPage() {
  return (
    <>
    <NavbarComponent></NavbarComponent>
      <main className=" w-full h-full flex justify-center items-center">
        <Card>
          <CardHeader className="text-4xl">Login</CardHeader>
          <Divider />
          <CardBody>
            <LoginForm />
          </CardBody>
        </Card>
      </main>
    </>
  );
}
