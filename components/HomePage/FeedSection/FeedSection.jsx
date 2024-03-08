import oneImg from "@/public/1.jpg";
import Image from "next/image";

export function FeedSection() {
  const feedItems = [
    {
      id: 1,
      user: "user1",
      content: "This is a post.",
      imageUrl: oneImg,
    },
    {
      id: 2,
      user: "user2",
      content: "Another post.",
      imageUrl: oneImg,
    },
    // Add more sample data as needed
  ];
  return (
    <section className="w-full bg-gray-100 py-6">
      <div className="w-full md:w-[75%] lg:w-[50%] xl:w-[40%] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          What's Happening in Dubai?
        </h1>
        <div className="space-y-6 ">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden w-[50vw] ml-[-14vw]"
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
                    <p className="text-gray-500">Date and Time</p>
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
