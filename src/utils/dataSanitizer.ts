export const dataSanitizer = <Type>(data: Type): Type => {
  let newData = {} as Type;

  for (const key in data) {
    if (!Number.isNaN(data[key]) && data[key] !== "") {
      newData[key] = data[key];
    }
  }
  return newData;
};
