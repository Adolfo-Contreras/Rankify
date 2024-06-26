import { NavbarComponent } from "@/components/Navbar";
import LoginForm from "@/components/login/loginForm";
import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";

export default function LoginPage() {
  return (
    <>
      <NavbarComponent />
      <main className="flex-col w-full h-full flex justify-center items-center gap-2.5">
        <Card>
          <CardHeader className="text-4xl pl-4">Login</CardHeader>
          <Divider />
          <CardBody>
            <LoginForm/>
          </CardBody>
        </Card>
        <section className="flex flex-col gap-2 items-center">
          <Link href={"/"}>Forgot password?</Link>

          <div className="flex items-center justify-center w-full">
            <Divider className="w-5/12" />
            <span className="mx-4 text-[#525252]">or</span>
            <Divider className="w-5/12" />
          </div>

          <span>
            Dont have an account? <Link href={"/"}>Create One Here!</Link>
          </span>
        </section>
      </main>
    </>
  );
}
