"use client";
import { useState } from "react";
import cn from "classnames";
type Props = {};

type TFormState = {
  name: string;
  email: string;
  message: string;
};

type TFormStatus = "idle" | "success" | "error" | "pending";

const initialFormState: TFormState = {
  name: "",
  email: "",
  message: "",
};

const Page = ({}: Props) => {
  const [status, setStatus] = useState<TFormStatus>("idle");
  const [form, setForm] = useState<TFormState>(initialFormState);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);

    setStatus("pending");
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).catch((err) => {
      setStatus("error");
      console.warn(err);
      return new Response(
        JSON.stringify({
          code: 400,
          message: "Error", // TODO handle error
        })
      );
    });
    if (response.ok) {
      setStatus("success");
      setForm(initialFormState);
    } else {
      setStatus("error");
      return Promise.reject(response);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Contact
      </h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            required={true}
            className="py-1 px-2 w-full max-w-sm border-2 border-black dark:border-white"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="email"
            className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required={true}
            className="py-1 px-2 w-full max-w-sm border-2 border-black dark:border-white"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="message"
            className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white"
          >
            Message
          </label>
          <textarea
            name="message"
            required={true}
            rows={5}
            cols={9}
            className="py-1 px-2 border-2 border-black dark:border-white"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            className="flex gap-4 justify-center items-center py-1 px-4 text-lg font-semibold border-2 border-gray-300 hover:border-black dark:hover:border-white"
            type={"submit"}
          >
            Submit
            <div
              className={cn(
                "w-6 h-6 rounded-full border-l-2 border-gray-900 animate-spin",
                status === "pending" ? "visible" : "hidden"
              )}
            />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Page;
