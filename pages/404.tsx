import Link from "next/link";
import MetaComponent from "../components/Meta";

export default function Custom404() {
  return (
    <>
      <MetaComponent
        title={`404: Page Not Found | CSTHEMOMENT`}
        description="Wrong party venue."
      />
      <div className="bg-white min-h-full flex flex-col lg:relative">
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col bg-white">
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  404 error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Don&apos;t miss the party.
                </p>
                <div className="mt-6">
                  <Link href="/">
                    <span className="cursor text-base font-medium text-gray-600 hover:text-gray-500">
                      Take me back<span aria-hidden="true"> &rarr;</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/couple.JPG"
            alt="404"
          />
        </div>
      </div>
    </>
  );
}
