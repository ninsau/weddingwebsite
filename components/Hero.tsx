
const collections = [
  {
    name: "Event",
    href: "/event",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_480,w_384/v1658095698/csthemoment/ff098f1e-0a39-42d9-a284-ff3ad370122d_furak0.webp",
    imageAlt: "couple in dubai",
    description: "View event details",
  },
  {
    name: "Menu",
    href: "/menu",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_480,w_384/v1658095698/csthemoment/7f20efe8-19fd-48b3-a417-0c117f2be3f9_ewk6zn.webp",
    imageAlt: "couple laughing",
    description: "View event menu",
  },
  {
    name: "RSVP",
    href: "https://api.whatsapp.com/send?phone=233550600004",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_480,w_384/v1658095699/csthemoment/52866a6c-1cbc-4e47-b344-1fa1c056c06d_x2qneg.webp",
    imageAlt: "couple looking at each other",
    description: "RSVP",
  },
];

export function HeroComponent() {
  return (
    <div className="relative bg-white">
      {/* Background image and overlap */}
      <div
        aria-hidden="true"
        className="hidden absolute inset-0 sm:flex sm:flex-col"
      >
        <div className="flex-1 relative w-full bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/deyudesls/image/upload/v1658095700/csthemoment/b2c265a8-b053-454c-bd29-1a4933838fd2_xrz4xl.webp"
              alt="image of couple standing in front of palm trees"
              className="w-full h-full object-center object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
      </div>

      <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col sm:hidden"
        >
          <div className="flex-1 relative w-full bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://res.cloudinary.com/deyudesls/image/upload/v1658095700/csthemoment/b2c265a8-b053-454c-bd29-1a4933838fd2_xrz4xl.webp"
                alt="image of couple standing in front of palm trees"
                className="w-full h-full object-center object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white h-48" />
        </div>
        <div className="relative py-32">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block text-base text-center text-white font-semibold tracking-wide uppercase">
              20-08-2022
            </span>
            Charles and Christabel
          </h1>
          <div className="mt-4 sm:mt-6">
            <p className="mt-3 text-xl text-white">
              We joyfully request the pleasure of your company as we speak our
              vows and join in marriage in the presence of family and friends.
            </p>
            {/* <Link href="/event">
          <span className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
            Event Details
          </span>
        </Link> */}
          </div>
        </div>
      </div>

      <section
        aria-labelledby="collection-heading"
        className="-mt-96 relative sm:mt-0"
      >
        <h2 id="collection-heading" className="sr-only">
          Collections
        </h2>
        <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img
                      src={collection.imageSrc}
                      alt={collection.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                  <div>
                    <p aria-hidden="true" className="text-sm text-white">
                      {collection.description}
                    </p>
                    <h3 className="mt-1 font-semibold text-white">
                      <a href={collection.href}>
                        <span className="absolute inset-0" />
                        {collection.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
