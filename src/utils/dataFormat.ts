export const dateFormat = (data: string) => {
  const dateObj = new Date(data);
  const minutes =
    dateObj.getMinutes() < 10
      ? `0${dateObj.getMinutes()}`
      : dateObj.getMinutes();
  return `${dateObj.getFullYear()}-${
    dateObj.getMonth() + 1
  }-${dateObj.getDate()} ${dateObj.getHours()}:${minutes}`;
};