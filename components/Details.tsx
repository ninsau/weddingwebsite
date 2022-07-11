import {
  DeviceTabletIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { Container } from "./Container";

const activity = [
  {
    id: 1,
    type: "comment",
    person: { name: "Traditional Wedding", href: "#" },
    comment:
      "The wedding will be held on Saturday, August 20th, 2022 at Sakyikrom, Nsawam. Digital Address code EG-103-1615 Dress code will be formal.",
    date: "20th August, 2022 (9am - 11am)",
  },
  {
    id: 2,
    type: "assignment",
    person: { name: "Reception", href: "#" },
    assigned: {
      name: "Zinnia Event Centre, 141 Giffard Road - East Legon",
      href: "#",
    },
    date: "",
  },
  {
    id: 3,
    type: "tags",
    person: { name: "White Wedding", href: "#" },

    date: "6h ago",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Details() {
  return (
    <Container>
      <div className="pt-20 pb-16 text-center lg:pt-32">
        <h3 className="font-display text-3xl tracking-tight text-slate-400 sm:text-4xl">
          Event Details
        </h3>
      </div>
      <div className="relative py-16 bg-white">
        <div className="lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            {" "}
            <ul role="list" className="-mb-8">
              {activity.map((activityItem, activityItemIdx) => (
                <li key={activityItem.id}>
                  <div className="relative pb-8">
                    {activityItemIdx !== activity.length - 1 ? (
                      <span
                        className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex items-start space-x-3">
                      {activityItem.type === "comment" ? (
                        <>
                          <div className="relative">
                            <DeviceTabletIcon
                              className="h-10 w-10 text-gray-500"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div>
                              <div className="text-sm">
                                <a
                                  href={activityItem.person.href}
                                  className="font-medium text-gray-900"
                                >
                                  {activityItem.person.name}
                                </a>
                              </div>
                              <p className="mt-0.5 text-sm text-gray-500">
                                {activityItem.date}
                              </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                              <p>{activityItem.comment}</p>
                            </div>
                          </div>
                        </>
                      ) : activityItem.type === "assignment" ? (
                        <>
                          <div>
                            <div className="relative px-1">
                              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                <UserCircleIcon
                                  className="h-5 w-5 text-gray-500"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-1.5">
                            <div className="text-sm text-gray-500">
                              <a
                                href={activityItem.person.href}
                                className="font-medium text-gray-900"
                              >
                                {activityItem.person.name}
                              </a>{" "}
                              at{" "}
                              <a
                                href={activityItem?.assigned?.href}
                                className="font-medium text-gray-900"
                              >
                                {activityItem?.assigned?.name}
                              </a>{" "}
                              <span className="whitespace-nowrap">
                                {activityItem.date}
                              </span>
                            </div>
                          </div>
                        </>
                      ) : activityItem.type === "tags" ? (
                        <>
                          <div>
                            <div className="relative px-1">
                              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                <SparklesIcon
                                  className="h-5 w-5 text-gray-500"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 py-0">
                            <div className="text-sm leading-8 text-gray-500">
                              <span className="mr-0.5">
                                <a
                                  href={activityItem.person.href}
                                  className="font-medium text-gray-900"
                                >
                                  {activityItem.person.name}
                                </a>{" "}
                                TBD 2023
                              </span>{" "}
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-x-6"></div>
    </Container>
  );
}
