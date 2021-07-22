import { Language } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DeleteButton from "../components/deletebutton";
import EditButton from "../components/editbutton";
import Slider from "../components/slider";

type InputLanguage = {
  language: string;
  logo: string;
};

export default function Home({
  languages,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const [langs, setLangs] = useState(languages);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputLanguage>();
  const onSubmit: SubmitHandler<InputLanguage> = async (data) => {
    console.log(data);
    await fetch("http://localhost:3000/api/languages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLangs((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const Edit = async (data) => {
    await fetch("http://localhost:3000/api/languages", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLangs((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const Cancel = async (data) => {
    await fetch("http://localhost:3000/api/languages", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setLangs((prev) => [...prev]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div>
        <Slider />
      </div>
      <div className="font-bold items-center text-xl">
        <h2>Languages</h2>
        <ul>
          {langs.map((language, index) => {
            return (
              <li key={language.id} className="text-base">
                <div className="flex items-center">
                  <div className="m-1">
                    {language.logo ? (
                      <Image
                        src={language.logo}
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
                  </div>
                  <p>{language.language}</p>
                  <EditButton onClick={Edit} />
                  <DeleteButton onClick={Cancel} />
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
              defaultValue="Language ?"
              {...register("language", { required: true })}
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
            {errors.language && <span>This field is required</span>}
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
  );
}

export const getStaticProps: GetStaticProps<{ languages: Language[] }> = async (
  context
) => {
  const languages = await fetch("http://localhost:3000/api/languages").then(
    (res) => res.json()
  );

  return {
    props: { languages },
  };
};
