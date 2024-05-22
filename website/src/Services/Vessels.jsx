import api from "./api";

const URL_BOT = 'vessel-bot/vessels';
const URL = '/vessels';

const getAllVessels = async () => {
  try {
    const { data } = await api.get(URL_BOT);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const addVesselToUser = async (userId, vesselName) => {
  try {
    const { data } = await api.get(URL +  "/new-user-vessel", {userId, vesselName});
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getAllVessels;