import oneImg from "@/public/1.jpg";
import Image from "next/image";
import Ad from "../Ad/Ad";

export function FeedSection() {
  const feedItems = [
    {
      id: 1,
      user: "User1",
      content: "Post1",
      imageUrl: oneImg,
    },
    {
      id: 2,
      user: "User2",
      content: "Post2",
      imageUrl: oneImg,
    },
    {
      id: 3,
      user: "User3",
      content: "Post3",
      imageUrl: oneImg,
    },
    // Add more sample data as needed
  ];
  const feedItems2 = [
    {
      id: 1,
      user: "User4",
      content: "Post4",
      imageUrl: oneImg,
    },
    {
      id: 2,
      user: "User5",
      content: "Post5",
      imageUrl: oneImg,
    },
    {
      id: 3,
      user: "User6",
      content: "Post6",
      imageUrl: oneImg,
    },
    // Add more sample data as needed
  ];
  return (
    <section className="w-full py-6">
      <div className="w-full flex flex-col mx-auto justify-center align-middle  ">
        <div className="w-full">
          <h1 className="text-3xl font-bold lg:text-center md:text-center xl:text-center 2xl:text-center mb-6 w-full text-blue-900 text-center">
            What's Happening in Dubai?
          </h1>
        </div>
        <div className="space-y-6 flex flex-col items-center">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden lg:w-[50vw] md:w-[50vw] xl:w-[50vw] 2xl:w-[50vw] w-full"
            >
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <Image
                    width={100}
                    height={100}
                    src={oneImg}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{item.user}</p>
                    <p className="text-gray-500">2024-03-08 12:00:01</p>
                  </div>
                </div>
                <p className="mt-2">{item.content}</p>
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt="Post"
                    className="mt-4 rounded-lg"
                  />
                )}
              </div>
              <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-600">
                    Like
                  </button>
                  <button className="text-gray-500 hover:text-gray-600">
                    Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Ad
            title="Advertisement"
            imageUrl={oneImg}
            link="www.test.com"
            description="This is a sponsored Advertisement for businesses in Dubai"
          />
          {feedItems2.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden lg:w-[50vw] md:w-[50vw] xl:w-[50vw] 2xl:w-[50vw] w-full"
            >
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <Image
                    width={100}
                    height={100}
                    src={oneImg}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{item.user}</p>
                    <p className="text-gray-500">2024-03-08 12:00:01</p>
                  </div>
                </div>
                <p className="mt-2">{item.content}</p>
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt="Post"
                    className="mt-4 rounded-lg"
                  />
                )}
              </div>
              <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-600">
                    Like
                  </button>
                  <button className="text-gray-500 hover:text-gray-600">
                    Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
