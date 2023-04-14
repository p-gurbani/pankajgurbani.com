import { stripHtml } from "string-strip-html";
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
    <div className="flex flex-col space-y-4 md:space-y-6">
      {blogs.map((blog) => (
        <a key={blog.guid} href={blog.link} rel="noreferrer" target="_blank" className="flex items-center space-x-4 border rounded-lg p-6 bg-card-bg md:bg-transparent hover:bg-card-bg dark:hover:bg-night-card-bg cursor-pointer">
          <div className="flex-1 flex flex-col space-y-3">
            <h4 className="heading-5 md:heading-4">{blog.title}</h4>
            <p className="para-sm hidden md:block">
              {stripHtml(blog.description)?.result?.substring(0, 100)}...
            </p>
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
