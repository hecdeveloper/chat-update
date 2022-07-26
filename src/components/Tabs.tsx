import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    All: [
      {
        id: 1,
        title: "Message 1",
        date: "5h ago",
        commentCount: 5,
        status: "active",
      },
      {
        id: 2,
        title: "Message 2",
        date: "2h ago",
        commentCount: 3,
        status: "active",
      },
    ],
    Active: [
      {
        id: 1,
        title: "Active Message1",
        date: "Jan 7",
        commentCount: 29,
        status: "active",
      },
      {
        id: 2,
        title: "Active Message2",
        date: "Mar 19",
        commentCount: 24,
        status: "active",
      },
    ],
    Closed: [
      {
        id: 1,
        title: "Closed Message1",
        date: "2d ago",
        commentCount: 9,
        status: "closed",
      },
      {
        id: 2,
        title: "Closed Message2",
        date: "4d ago",
        commentCount: 1,
        status: "closed",
      },
    ],
  });

  return (
    <div className="w-full px-3 ">
      <Tab.Group>
        <div className="px-3 py-3 rounded-lg bg-zinc-50">
          <Tab.List className="flex p-1 space-x-1 rounded-xl bg-blue-900/20">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-600 hover:bg-x/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl p-3",
                "ring-white  ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 mb-2 bg-white rounded-md hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.status}</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
