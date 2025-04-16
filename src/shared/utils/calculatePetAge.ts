export const calculatePetAge = (birthYearString: string) => {
  const currentYear = new Date().getFullYear();
  const birthYear = parseInt(birthYearString.slice(0, 4), 10);
  return currentYear - birthYear;
};
