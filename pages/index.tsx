import { Language, Stack } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import EditButton from "../components/editbutton";

type InputLanguage = {
  language: string;
  logo: string;
};

export default function Home({
  languages,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const [langs, setLangs] = useState(languages);
  const [langsEdit, setLangsEdit] = useState(languages);

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

  const Edit = async () => {
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
        setLangsEdit((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div>
        <h2>30 Boulevard des plages, 64600 Anglet</h2>
        <h2>ma.ojeanson@gmail.com</h2>
        <h2>+33 6 85 78 83 04</h2>
        <h2>33 ans</h2>
        <h2>Licence driving</h2>
        <h2>Word Wild</h2>
      </div>
      <div>
        <h2>Languages</h2>
        <ul>
          {langs.map((language, index) => {
            return (
              <li key={language.id}>
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
                </div>
              </li>
            );
          })}
        </ul>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            defaultValue="Language ?"
            {...register("language", { required: true })}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input defaultValue="Logo ?" {...register("logo")} />
          {/* errors will return when field validation fails  */}
          {errors.language && <span>This field is required</span>}

          <input type="submit" />
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
