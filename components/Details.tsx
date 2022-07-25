import {
  BadgeCheckIcon,
  CameraIcon,
  ChevronDoubleDownIcon,
  CubeTransparentIcon,
  FireIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const weddingFeatures = [
  {
    id: 1,
    name: "Wedding ceremony (9am - 11am)",
    description:
      "The ceremony will begin promptly on the 20th August, 2022, from 9am - 11am.",
    icon: FireIcon,
  },
  {
    id: 2,
    name: "Picture-taking (11am - 12pm)",
    description:
      "Picture taking will follow immediately after the ceremony, from 11am - 12pm.",
    icon: CameraIcon,
  },
  {
    id: 3,
    name: "Appetizers (12pm - 1pm)",
    description:
      "Appetizers will be served shortly after picture-taking, from 12pm - 1pm.",
    icon: BadgeCheckIcon,
  },

];
const reception = [
  {
    id: 1,
    name: "Entry of families and Couple (5pm - 6pm)",
    description:
      "Finally after the afternoon, the entry of families and Couple will be held, from 5pm - 6pm.",
    icon: ChevronDoubleDownIcon,
  },
  {
    id: 2,
    name: "Dinner (6pm - 8pm)",
    description:
      "We will have our sumptous dinner, from 6pm - 8pm, at the reception hall.",
    icon: ShoppingBagIcon,
  },
  {
    id: 3,
    name: "Speeches and Toasts (8pm - 9pm)",
    description:
      "Come and hear incredible stories from the people who know us, from 8pm - 9pm.",
    icon: UsersIcon,
  },

  {
    id: 4,
    name: "Entertainment (9pm - 10pm)",
    description: "Join us as we enjoy the evening, from 9pm - 10pm.",
    icon: CubeTransparentIcon,
  },
];

export default function Details() {
  return (
    <>
      <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/deyudesls/image/upload/v1658097483/csthemoment/photo-1522413452208-996ff3f3e740_ukrsbh.webp"
            alt="couple standing together in front of palm trees"
            className="w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-50"
        />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Event Details
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Decorative background image and gradient */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0  mx-auto overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9oZW1pYW4lMjB3ZWRkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="couple standing together in front of palm trees"
              className="w-full h-full object-center object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-white bg-opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
        </div>

        <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <svg
              className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Traditional Wedding
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  The wedding will be held on Saturday, August 20th, 2022 at
                  Sakyikrom, Nsawam. Digital Address code EG-103-1615 Dress code
                  will be formal.
                </p>

                <dl className="mt-10 space-y-10">
                  {weddingFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                          {item.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={784}
                    height={404}
                    fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                  />
                </svg>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.208565554626!2d-0.3653275851785897!3d5.82618953249246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf0c118d03bc3b%3A0xa8932772f56f2c1!2sSt%20Martins%20Senior%20High%20School!5e0!3m2!1sen!2sgh!4v1658098970123!5m2!1sen!2sgh"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <svg
              className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    After Wedding Reception
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    Reception at Zinnia Event Centre, 141 Giffard Road - Cantonments
                  </p>

                  <dl className="mt-10 space-y-10">
                    {reception.map((item) => (
                      <div key={item.id} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                            {item.name}
                          </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                          {item.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <svg
                    className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                    width={784}
                    height={404}
                    fill="none"
                    viewBox="0 0 784 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={784}
                      height={404}
                      fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                    />
                  </svg>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.878905946861!2d-0.1629806853729624!3d5.5849114349113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bb2b78140bb%3A0x5d0f27f00c4df407!2sZinnia%20Events%20Center!5e0!3m2!1sen!2sgh!4v1658098827870!5m2!1sen!2sgh"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
