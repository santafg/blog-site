import { useAppSelector } from "@/lib/hooks/redux/useAppSelector";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BlogListPage = () => {
  const { blogs } = useAppSelector((s) => s.blogSlice);
  const router = useRouter();
  return (
    <div>
      <div>
        <Link href={`/`}>Go back</Link>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl">Blogs</h1>
      </div>
      {blogs.length < 1 && <p>Loading...</p>}
      <div className="flex justify-between gap-3 flex-wrap p-4">
        {blogs?.map((blog, i) => (
          <div
            key={i}
            className="border p-3 w-full sm:w-1/3 -mx-3 cursor-pointer hover:border-black transition-all rounded"
            onClick={() => router.push(`/blogs/${blog.blog_id}`)}
          >
            <h1 className="text-lg">{blog.blog_name}</h1>
            <h2 className="text-sm mt-2">{blog.published_at}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
