export const requiredFieldsFilled = (inputs, requiredFields) => {
  for (const field of requiredFields) {
    if (!inputs[field]) {
      return false;
    }
  }
  return true;
};
