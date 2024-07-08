import { getAllBlogs, getAllSeverBlogs } from "@/api/functions/blog.api";
import { useAppDispatch } from "@/lib/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/lib/hooks/redux/useAppSelector";
import { setBlogs } from "@/redux-toolkit/slices/blogSlice";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const { blogs } = useAppSelector((s) => s.blogSlice);

  const dispatch = useAppDispatch();

  const { data } = useQuery({
    queryKey: ["get_all_blogs"],
    queryFn: getAllSeverBlogs,
    enabled: blogs?.length == 0,
  });

  const blogData = data?.blogData?.documents
  // console.log("blogData", blogData);

  useEffect(() => {
    if (blogData && blogData?.length > 0) {
      dispatch(setBlogs(blogData));
    }
  }, [blogData]);


  return <>{children}</>;
};

export default BlogLayout;
