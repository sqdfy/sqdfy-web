const emailRegex = /^[\p{L}0-9_.+~-]+@[\p{L}0-9-]+\.[a-zA-Z0-9-.]+$/u

export const isEmailValid = (email) => {
  return emailRegex.test(email)
}
