export interface IBlog {
  id: string;
  author: string;
  url: string;
  title: string;
  text: string;
  language_code: string;
  location_code: any;
  links: string[];
  tags: any[];
  images: any[];
  indexed_at: string;
  published_at: string;
  reindexed_at: string;
  inlinks_count: number;
  blog_id: string;
  blog_name: string;
  blog_url: string;
  blog_rank: number;
  authority: number;
}

export interface IBlogApiResponse {
  ts: string;
  from: string;
  number_of_posts: number;
  max_number_of_posts: number;
  first_post: string;
  last_post: string;
  next_timestamp: string;
  documents: IBlog[];
}
export interface IBlogBackendApiResponse {
  blogData: {
    ts: string;
    from: string;
    number_of_posts: number;
    max_number_of_posts: number;
    first_post: string;
    last_post: string;
    next_timestamp: string;
    documents: IBlog[];
  };
}
