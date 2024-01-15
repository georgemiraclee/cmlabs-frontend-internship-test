import Link from "next/link";

export default function FourOhFour() {
  return (
    <section className="h-full flex align-middle bg-white">
      <div className="max-w-7xl mx-auto py-16 px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
          whoooooopsss
        </h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Its Seems you lost your way!
        </p>
        <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
          Don&apos;t worry, sometime we lost our way, but we are here to help
          you. Click the button below to find your way back.
        </p>
        <Link href={'/'}>
          <div className="px-4 py-2.5 rounded-md sm:mx-auto mt-2 bg-indigo-500 hover:bg-indigo-600 w-24 font-medium text-white">Home</div>
        </Link>
      </div>
    </section>
  );
}
