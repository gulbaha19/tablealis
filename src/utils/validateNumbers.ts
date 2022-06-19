export const validateIIN = (str: any) => {
  const numbers = str.match(/\d+/g)?.join("") ?? "";
  return numbers.length === 12;
};
