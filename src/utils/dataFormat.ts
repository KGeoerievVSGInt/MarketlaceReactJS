export const dateFormat = (data: string) => {
  const dateObj = new Date(data);
  const minutes =
    dateObj.getMinutes() < 10
      ? `0${dateObj.getMinutes()}`
      : dateObj.getMinutes();
  const hours =
    dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours();
  const days =
    dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
  const months =
    dateObj.getMonth() + 1 < 10
      ? `0${dateObj.getMonth() + 1}`
      : dateObj.getMonth() + 1;
  return `${dateObj.getFullYear()}-${months}-${days} ${hours}:${minutes}`;
};
