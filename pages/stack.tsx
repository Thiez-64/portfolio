import { Stack } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import EditButton from "../components/editbutton";
import { useForm, SubmitHandler } from "react-hook-form";

type InputStack = {
  stack: string;
  logo: string;
};

export default function Stacks({
  stacks,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputStack>();
  const onSubmit: SubmitHandler<InputStack> = async (data) => {
    console.log(data);
    await fetch("http://localhost:3000/api/stacks", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log(stacks);
  return (
    <div>
      <h2>Web Skills</h2>
      <ul>
        {stacks.map((stack, index) => {
          return (
            <li key={stack.id}>
              <div className="flex items-center">
                <div className="m-1">
                  {stack.logo ? (
                    <Image src={stack.logo} alt="logo" width={60} height={60} />
                  ) : (
                    <Image
                      src="/placeholder.svg"
                      alt="placeholder"
                      width={60}
                      height={60}
                    />
                  )}
                </div>
                <p>{stack.stack}</p>
                <EditButton />
              </div>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          defaultValue="Stack ?"
          {...register("stack", { required: true })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input defaultValue="Logo ?" {...register("logo")} />
        {/* errors will return when field validation fails  */}
        {errors.stack && <span>This field is required</span>}

        <input type="submit" />
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
