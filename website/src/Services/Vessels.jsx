import api from "./api";

const URL = '/vessels'

const getAllVessels = async () => {
  try {
    const { data } = await api.get(URL);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getAllVessels;