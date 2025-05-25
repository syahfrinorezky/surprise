"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import { Card } from "@/components";
import { HiCalendar, HiX } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa6";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

import { relationship } from "@/data/relationship.data";
import { bounceAnimation } from "@/lib/motion/bounce";
import clsx from "clsx";

export default function Validation() {
  const LottiePlayer = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    {
      ssr: false,
    }
  );

  const datePicker = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isBirthdateValid, setIsBirthdateValid] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [isShowModal, setIsShowModal] = React.useState(false);

  const NAME_VALID: string = relationship.name.gf;
  const BIRTHDATE_VALID: string = relationship.birthdate.gf;

  const handleCLear = () => {
    setName("");
    setBirthdate("");
    setIsNameValid(false);
    setIsBirthdateValid(false);
    setIsSubmitted(false);
    setIsShowModal(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const nameCheck = name == NAME_VALID;
    const birthdateCheck = birthdate == BIRTHDATE_VALID;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsNameValid(nameCheck);
    setIsBirthdateValid(birthdateCheck);
    setIsSubmitted(true);

    setIsLoading(false);

    if (nameCheck && birthdateCheck) {
      setIsShowModal(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = isShowModal ? "Sukses Validasi!" : "Validasi";
    }
  }, [isShowModal]);

  return (
    <>
      <Card className="flex flex-col gap-2 w-3/4 md:w-2/5 lg:w-1/4">
        <h1 className="font-primary text-primary text-xl text-center">
          Validation
        </h1>
        <p className="font-secondary text-slate-200 text-sm text-center">
          Aku harus validasi kamu dahulu
        </p>
        <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-3">
          <label htmlFor="name" className="flex flex-col gap-1">
            <span className="text-slate-200 font-medium  font-tertiary">
              Name
            </span>
            {isSubmitted && !isNameValid && (
              <span className="text-red-500 text-sm">Wrong name</span>
            )}
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Input your name"
              className="p-2 rounded-md bg-stone-900 hover:ring-2 hover:ring-primary/50 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-400 ease-in-out"
            />
          </label>
          <label htmlFor="birthdate" className="flex flex-col gap-1">
            <span className="text-slate-200 font-medium font-tertiary">
              Birthdate
            </span>
            {isSubmitted && !isBirthdateValid && (
              <span className="text-red-500 text-sm">Wrong birthdate</span>
            )}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => datePicker.current?.showPicker()}
                className="flex p-2 bg-gradient-to-br from-primary to-indigo-400 rounded">
                <HiCalendar size={20} />
              </button>
              <input
                type="date"
                ref={datePicker}
                name="birthdate"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="p-2 w-full rounded-md bg-stone-900 hover:ring-2 hover:ring-primary/50 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-400 ease-in-out"
              />
            </div>
          </label>
          <button
            type="button"
            onClick={handleCLear}
            className="flex justify-end text-sm text-primary underline font-medium font-tertiary cursor-pointer">
            Clear
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className={clsx(
              "mt-3 p-2 flex items-center justify-center bg-gradient-to-br from-primary to-indigo-400 rounded cursor-pointer",
              isLoading ? "opacity-50" : ""
            )}>
            {" "}
            {isLoading ? (
              <FaSpinner size={20} className="animate-spin" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </Card>

      {isShowModal && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10">
            <div className="fixed inset-0 flex items-center justify-center">
              <motion.div
                variants={bounceAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-slate-200 flex flex-col text-stone-900 p-4 rounded-md gap-2 text-center">
                <div className="flex justify-end">
                  <HiX
                    onClick={() => setIsShowModal(false)}
                    size={20}
                    className="cursor-pointer"
                  />
                </div>
                <div className="mx-auto">
                  <LottiePlayer
                    autoplay
                    loop
                    src={"/anim/success.json"}
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                <h1 className="font-bold text-secondary text-lg">Success!</h1>
                <p>Kamu adalah orang yang tepat</p>

                <button
                  type="button"
                  onClick={async () => (
                    setIsLoading(true),
                    await new Promise((resolve) => setTimeout(resolve, 3000)),
                    setIsShowModal(false),
                    localStorage.setItem("isSubmitted", "true"),
                    router.push("/reflection")
                  )}
                  className={clsx(
                    "mt-3 p-2 flex items-center justify-center bg-gradient-to-br from-primary to-indigo-400 rounded cursor-pointer text-white font-bold",
                    isLoading ? "opacity-50" : ""
                  )}>
                  {" "}
                  {isLoading ? (
                    <FaSpinner size={20} className="animate-spin" />
                  ) : (
                    "Lanjut!"
                  )}
                </button>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
