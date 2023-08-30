export const verifyEmail = (email: string) => {
  const emailTrim = email.trim();
  // RegEx check if email is valid
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(emailTrim) ? true : false;
};

export const verifyPassword = (password: string) => {
  const passwordTrim = password.trim();
  //RegEx check if password has: min 8 characters, min 1 uppercase and min 1 symbol
  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
  return regex.test(passwordTrim) ? true : false;
};

export const isSimpleString = (str: string) => {
  const strTrim = str.trim();
  const regex = /^[a-zA-Z0-9\w\s]+$/;
  return regex.test(strTrim);
};
