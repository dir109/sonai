import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-blue-900 h-16 flex items-center justify-between px-8">
      <div className="space-x-3 flex items-center">
        <img src="/logo.png" alt="logo" className="h-8" />
        <p className="text-white text-2xl font-semibold pt-2 hidden sm:block">
          WEBMAIL
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <Image src="/search.svg" alt="search" height={30} width={30} />
        <div className=" rounded-full p-1 bg-yellow-200">
          <Image
            src="/navi.svg"
            alt="navi"
            height={30}
            width={30}
            className="fill-blue-900"
          />
        </div>

        <div className="relative hidden sm:block">
          <Image
            src="/ques.svg"
            alt="ques"
            height={30}
            width={30}
            className="stroke-2 stroke-white"
          />
          <span className="absolute top-1 left-3 font-bold text-blue-900">
            ?
          </span>
        </div>
      </div>
    </div>
  );
}
