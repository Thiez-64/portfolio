import { Education } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type InputEducation = {
  year: string;
  school: string;
  education: string;
  description: string;
  beginDate: string;
  finishDate: string;
  logo: string;
};

export default function EducationSkill({
  educations,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const [educs, setEducs] = useState(educations);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputEducation>();

  const onSubmit: SubmitHandler<InputEducation> = async (data) => {
    console.log(data);
    await fetch("http://localhost:3000/api/educations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setEducs((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(data);
  };

  return (
    <div>
      <div className="flex">
        <div className="font-bold items-center text-xl">
          <h2>Educations</h2>
          <ul>
            {educs.map((education, index) => {
              return (
                <li key={education.id} className="text-base">
                  <div className="flex items-center">
                    <div className="m-1">
                      {education.logo ? (
                        <Image
                          src={education.logo}
                          alt="logo"
                          width={225}
                          height={150}
                        />
                      ) : (
                        <Image
                          src="/placeholder.svg"
                          alt="placeholder"
                          width={60}
                          height={60}
                        />
                      )}
                    </div>
                    <p>{education.year}</p>
                    <p>{education.education}</p>
                    <p>{education.school}</p>
                    <p>{education.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center flex-wrap"
          >
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <input
                className="bg-gray-200 text-gray-400 italic text-center border-1 border-black rounded-md"
                defaultValue="Year ?"
                {...register("year", { required: true })}
              />
            </div>
            {/* include validation with required or other standard HTML validation rules */}
            <div>
              <input
                className="bg-gray-200 text-gray-400 italic text-center border-1 border-black rounded-md"
                defaultValue="Title ?"
                {...register("description", { required: true })}
              />
            </div>
            {/* include validation with required or other standard HTML validation rules */}
            <div>
              <input
                className="bg-gray-200 text-gray-400 italic text-center border-1 border-black rounded-md"
                defaultValue="School ?"
                {...register("school", { required: true })}
              />
            </div>
            {/* include validation with required or other standard HTML validation rules */}
            <div>
              <input
                className="bg-gray-200 text-gray-400 italic text-center border-1 border-black rounded-md"
                defaultValue="Start Date ?"
                {...register("beginDate", { required: true })}
              />
            </div>
            {/* include validation with required or other standard HTML validation rules */}
            <div>
              <input
                className="bg-gray-200 text-gray-400 italic text-center border-1 border-black rounded-md"
                defaultValue="End Date ?"
                {...register("finishDate", { required: true })}
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
              {errors.education && <span>This field is required</span>}
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

export const getStaticProps: GetStaticProps<{ educations: Education[] }> =
  async (context) => {
    const educations = await fetch("http://localhost:3000/api/educations").then(
      (res) => res.json()
    );
    return {
      props: { educations },
    };
  };
