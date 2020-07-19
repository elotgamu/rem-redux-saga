import axios from "axios";

export const getUsers = (params) => {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  });
};
