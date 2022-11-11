"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  body: string;
};

type Props = {};

function ContactMe({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:email@email.com?subject=${data.subject}&body=${data.name}; ${data.body}`;
  };

  return (
    <div className="flex relative flex-col justify-evenly items-center px-10 mx-auto max-w-7xl h-screen text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px]">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Hey,{" "}
          <span className="underline decoration-yellow-200/50">Lets talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex justify-center items-center space-x-5">
            <PhoneIcon className="w-7 h-7 text-yellow-200 animate-pulse" />
            <p className="text-2xl">+123456789</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon className="w-7 h-7 text-yellow-200 animate-pulse" />
            <p className="text-2xl">Milan, Italy</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="w-7 h-7 text-yellow-200 animate-pulse" />
            <p className="text-2xl">email@email.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto space-y-2 w-fit"
        >
          <div className="flex space-x-2">
            <input
              type={"text"}
              placeholder="Name"
              className="contactInput"
              {...register("name", { required: true })}
            />
            <input
              type={"email"}
              placeholder="Email"
              className="contactInput"
              {...register("email", { required: true })}
            />
          </div>
          <input
            type={"text"}
            placeholder="Subject"
            className="contactInput"
            {...register("subject", { required: true })}
          />
          <textarea
            placeholder="Body"
            className="contactInput"
            {...register("body", { required: true })}
          />
          <button
            type={"submit"}
            className="py-5 px-10 text-lg font-bold text-black bg-yellow-400 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
