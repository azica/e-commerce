import axios from "axios";

import { Endpoints } from "api/endpoints";
import { shopApiUrl } from "shared/constants";

export const PostService = {
  async getPosts(): Promise<GetPosts | ErrorResponse> {
    const res = await axios.get<GetPosts & ErrorResponse>(`${shopApiUrl}${Endpoints.GET_POSTS}?limit=3`);
    return res.data;
  },
};
