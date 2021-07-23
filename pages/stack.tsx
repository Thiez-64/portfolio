import { Stack } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import EditButton from "../components/editbutton";
import DeleteButton from "../components/deletebutton";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Placeholder from "../public/placeholder.svg";

type InputStack = {
  stack: string;
  logo: string;
};

export default function DevStack({
  stacks,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const [devStacks, setDevStacks] = useState(stacks);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputStack>();
  const onSubmit: SubmitHandler<InputStack> = async (data) => {
    console.log(data);
    await fetch("http://localhost:3000/api/stacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setDevStacks((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log(stacks);
  return (
    <div className="font-bold items-center text-xl">
      <h2>Web Skills</h2>
      <ul>
        {devStacks.map((stack, index) => {
          return (
            <li key={stack.id}>
              <div className="flex items-center">
                <div className="m-1">
                  {stack.logo ? (
                    <Image src={stack.logo} alt="logo" width={60} height={60} />
                  ) : (
                    <Image
                      src={Placeholder}
                      alt="placeholder"
                      width={60}
                      height={60}
                    />
                  )}
                </div>
                <p>{stack.stack}</p>
                <EditButton />
                <DeleteButton />
              </div>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <input
            className="bg-gray-200 text-gray-400 italic text-center border-1 border-black rounded-md"
            defaultValue="Stack ?"
            {...register("stack", { required: true })}
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div>
          <input
            className="bg-gray-200 text-gray-400 italic text-center border-1 border-black rounded-md"
            defaultValue="Logo ?"
            {...register("logo")}
          />
        </div>
        {/* errors will return when field validation fails  */}
        {errors.stack && <span>This field is required</span>}

        <div>
          <input
            className="p-2 bg-blue-700 rounded-md text-white"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{ stacks: Stack[] }> = async (
  context
) => {
  const stacks = await fetch("http://localhost:3000/api/stacks").then((res) =>
    res.json()
  );

  return {
    props: { stacks },
  };
};
