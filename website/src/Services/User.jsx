import api from "./api";

const URL = '/user'

export const getUserByName = async (userName, token) => {
  try {
    const { data } = await api.get(`${URL}/${userName}`);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
