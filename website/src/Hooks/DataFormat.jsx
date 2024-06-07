const DataFormat = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const today = new Date();

  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return `Santos, ${month} ${day}, ${year}`;
};

export default DataFormat;