import { useEffect, useState } from "react";

const MediumBlogs = ({ username }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setBlogs(data.items?.splice(0, 4));
      });
  }, [username]);

  return (
    <div className="flex flex-col items-center gap-4">
      {blogs.map((blog) => (
        <a key={blog.guid} href={blog.link} rel="noreferrer" target="_blank" className="flex items-center md:w-3/4 space-x-4 border rounded-lg p-6 bg-card-bg dark:bg-night-card-bg md:bg-transparent md:dark:bg-transparent hover:bg-card-bg dark:hover:bg-night-card-bg cursor-pointer">
          <div className="flex-1 flex flex-col">
            <h5 className="heading-5">{blog.title}</h5>
          </div>
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="rounded-lg md:w-1/3 w-1/4"
          />
        </a>
      ))}
    </div>
  );
};
export default MediumBlogs;
