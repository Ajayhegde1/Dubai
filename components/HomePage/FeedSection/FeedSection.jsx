export function FeedSection() {
  const feedItems = [
    {
      id: 1,
      user: "user1",
      content: "This is a post.",
      imageUrl: "url_to_image",
    },
    {
      id: 2,
      user: "user2",
      content: "Another post.",
      imageUrl: "url_to_image",
    },
    {
      id: 2,
      user: "user2",
      content: "Another post.",
      imageUrl: "url_to_image",
    },
    {
      id: 2,
      user: "user2",
      content: "Another post.",
      imageUrl: "url_to_image",
    },
    {
      id: 2,
      user: "user2",
      content: "Another post.",
      imageUrl: "url_to_image",
    },
    {
      id: 2,
      user: "user2",
      content: "Another post.",
      imageUrl: "url_to_image",
    },
    {
      id: 2,
      user: "user2",
      content: "Another post.",
      imageUrl: "url_to_image",
    },

    {
      id: 2,
      user: "user2",
      content: "Another post.",
      imageUrl: "url_to_image",
    },
    {
      id: 2,
      user: "user2",
      content: "Another post.",
      imageUrl: "url_to_image",
    },
    // Add more sample data as needed
  ];
  return (
    <section className="w-full h-[30vh] flex justify-center">
      <div className="w-[98%] h-full  rounded-xl  shadow-lg drop-shadow-xl">
        <h1>What's Happenning in Dubai?</h1>
        <div className="flex flex-col items-center w-full">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className="w-full bg-white my-4 rounded-lg shadow-md"
            >
              <div className="flex items-center p-4 w-full">
                <img
                  src="profile_picture_url"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span className="font-bold">{item.user}</span>
              </div>
              <div className="p-4">
                <p className="mb-4">{item.content}</p>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt="Post"
                    className="w-full rounded-lg"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
