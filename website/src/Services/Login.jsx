import api from "./api";

const URL = '/login'

const loginToken = async (obj) => {
  try {
    const { data } = await api.post(URL, obj);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default loginToken;
