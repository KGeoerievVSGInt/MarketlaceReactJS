export const getUsername = (json: string|null) => {
  return json ? JSON.parse(json).username : null;
};
