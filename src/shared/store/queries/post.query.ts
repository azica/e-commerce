import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { PostService } from "services/PostService";
import { baseApiUrl } from "shared/constants";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<GetPosts | ErrorResponse, void>({
      queryFn: async () => {
        try {
          const res = await PostService.getPosts();
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response?.data || error.message,
          };
        }
      },
      providesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
