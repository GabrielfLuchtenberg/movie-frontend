import { api } from "../api";

const movieApi = {
  list: async ({ page, limit, name }) => {
    const response = await api.get("/v1/movie/upcoming", {
      params: { page, limit, name }
    });
    return response.data;
  },
  get: async ({ id }) => {
    const response = await api.get(`/v1/movie/${id}`);
    return response.data;
  }
};

export { movieApi };
