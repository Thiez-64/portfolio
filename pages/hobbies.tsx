import { Interest } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DeleteButton from "../components/deletebutton";
import EditButton from "../components/editbutton";
import Slider from "../components/slider";

type InputInterest = {
  interest: string;
  logo: string;
};

export default function Hobbies({
  interests,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const [ints, setInts] = useState(interests);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputInterest>();

  const onSubmit: SubmitHandler<InputInterest> = async (data) => {
    console.log(data);
    await fetch("http://localhost:3000/api/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setInts((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const Edit = async (data) => {
    await fetch("http://localhost:3000/api/interests", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setInts((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const Cancel = async (data) => {
    await fetch("http://localhost:3000/api/interests", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setInts((prev) => [...prev]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="flex">
        <div className="font-bold items-center text-xl">
          <h2>Hobbies and Interests</h2>
          <ul>
            {ints.map((interest, index) => {
              return (
                <li key={interest.id}>
                  {interest.logo ? (
                    <Image
                      src={interest.logo}
                      alt="logo"
                      width={225 / 5}
                      height={150 / 5}
                    />
                  ) : (
                    <Image
                      src="/placeholder.svg"
                      alt="placeholder"
                      width={60}
                      height={60}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <input
                className="bg-gray-200 text-gray-400 italic text-center border-1 border-black rounded-md"
                defaultValue="Hobby ?"
                {...register("interest", { required: true })}
              />
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <div>
              <input
                className="bg-gray-200 text-gray-400 italic text-center border-1 border-black rounded-md"
                defaultValue="Logo ?"
                {...register("logo")}
              />
              {/* errors will return when field validation fails  */}
              {errors.interest && <span>This field is required</span>}
            </div>
            <div>
              <input
                className="p-2 bg-blue-700 rounded-md text-white"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{ interests: Interest[] }> = async (
  context
) => {
  const interests = await fetch("http://localhost:3000/api/interests").then(
    (res) => res.json()
  );
  return {
    props: { interests },
  };
};
