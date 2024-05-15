import api from "./api";

const URL = '/status'

const getCurrentStatusLable = async () => {
  try {
    const { data } = await api.get(URL);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getCurrentStatusLable;