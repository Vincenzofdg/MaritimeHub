const saveToLocalStorage = (key, value) => {
  const strValue = JSON.stringify(value);

  localStorage.setItem(key, strValue);
}

const deleteFromLocalStorage = (key) => localStorage.removeItem(key);


const getFromLocalStorage = (key) => {
  const dataFromLocal = localStorage.getItem(key);
  const convert = JSON.parse(dataFromLocal);

  return convert;
}

export default {
  save: saveToLocalStorage,
  delete: deleteFromLocalStorage,
  get: getFromLocalStorage
}