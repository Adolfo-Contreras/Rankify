"use client";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Button, Input } from "@nextui-org/react";
import { useMemo, useState } from "react";
export default function LoginForm() {
  const [isvisible, setisvisible] = useState<boolean>(false);
  const [email, setemail] = useState<string>("");
  const [pass, setpass] = useState<string>("");
  //end of states

  //email validation
  const validateEmail = (value:string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const isInvalid = useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);
  //pasword visibility
  const toggleVisibility = (e: any) => {
    e.preventDefault();
    setisvisible(!isvisible);
  };
  return (
    <>
      <form className="flex flex-col gap-4 items-center">
        <Input
          label="Email"
          labelPlacement="outside"
          name="userEmail"
          type="email"
          isInvalid={isInvalid}
          value={email}
          onValueChange={setemail}
        />
        <Input
          label="Password"
          labelPlacement="outside"
          name="userPassword"
          type={isvisible ? "text" : "password"}
          value={pass}
          onValueChange={setpass}
          endContent={
            <button onClick={(e) => toggleVisibility(e)}>
              {isvisible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
            </button>
          }
        />
        <Button
          variant="ghost"
          color="primary"
          fullWidth
          className="mt-4"
          type="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
}
