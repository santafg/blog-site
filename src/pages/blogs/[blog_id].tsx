import { IBlog } from "@/interface/blog.interface";
import { useAppSelector } from "@/lib/hooks/redux/useAppSelector";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BlogDetails = () => {
  const router = useRouter();

  const { blogs } = useAppSelector((s) => s.blogSlice);

  const [foundBlog, setFoundBlog] = useState<IBlog | null | undefined>();

  // console.log("foundBlog", foundBlog);

  useEffect(() => {
    if (blogs?.length > 0 && router.query.blog_id) {
      setFoundBlog(blogs.find((blog) => blog.blog_id == router.query.blog_id));
    }
  }, [blogs, router.query]);

  return (
    <div>
      <div>
        <Link href={`/blogs`}>Go Back</Link>
      </div>
      {blogs.length == 0 && !foundBlog && <p>Loading...</p>}
      {blogs.length > 0 && !foundBlog ? (
        <p>Blog not found refresh or go back</p>
      ) : (
        <div className="m-4">
          <h1 className="text-2xl text-center">{foundBlog?.blog_name}</h1>
          <h2 className="text-lg mt-4">{foundBlog?.title}</h2>
          <p className="text-xs mt-2">{foundBlog?.text}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
