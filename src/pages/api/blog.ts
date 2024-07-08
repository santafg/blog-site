
const url = `https://api.twingly.com/blog/livefeed/api/v5/GetData?apikey=7E3B1139-FB2F-40AD-A870-1C1995E9A272&timestamp=2017-04-24T10:22:37.354Z&format=json&maxPosts=50`;


import { IBlogApiResponse } from "@/interface/blog.interface";
import axios from "axios";


import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  blogData: IBlogApiResponse;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const result = await axios.get(url);
  // console.log(result.data);

  if (result.data) {
    res.status(200).json({ blogData: result.data });
  }
}
