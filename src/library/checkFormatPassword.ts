import { TConfig } from "../types/index.types";

/**
 * Checks if a given password meets the specified format
 * requirements and returns whether it is valid or not, along with any error messages.
 * @param {string} password - Represent the password that needs to be checked
 * @param {TConfig} config - Represent the configuration object that contains the format requirements
 * @returns {object} - Returns an `object` with two properties: isValid and message.
 * - `isValid` is a `boolean` that represents whether the password is valid or not.
 * - `message` is a `string` or an `array` of strings that contains any error messages.
 */
const checkFormatPassword = (password: string, config: TConfig) => {
  if (!config.length) {
    config.length = {
      min: {
        value: 8,
      },
      max: {
        value: 64,
      },
    };
  }

  const messages = [];

  if (config.length && password.length < config.length.min.value) {
    messages.push(config.length?.min.message || "Password is too short.");
  }

  if (config.length && password.length > config.length.max.value) {
    messages.push(config.length?.max.message || "Password is too long.");
  }

  if (config.string?.allow === false && /[a-zA-Z]/.test(password)) {
    messages.push(
      config.string?.message || "Password must not contain any letters."
    );
  }

  if (
    config.string?.allow !== false &&
    config.string?.upperCase.allow !== false &&
    !/[A-Z]/.test(password)
  ) {
    messages.push(
      config.string?.upperCase.message ||
        "Password must contain at least one uppercase letter."
    );
  }

  if (
    config.string?.allow !== false &&
    config.string?.lowerCase.allow !== false &&
    !/[a-z]/.test(password)
  ) {
    messages.push(
      config.string?.lowerCase.message ||
        "Password must contain at least one lowercase letter."
    );
  }

  if (config.number?.allow !== false && !/\d/.test(password)) {
    messages.push(
      config.number?.message || "Password must contain at least one number."
    );
  }

  if (config.number?.allow === false && /\d/.test(password)) {
    messages.push(
      config.number?.message || "Password must not contain any numbers."
    );
  }

  const specialChars = "!@#$%^&*()_+{}[]:;<>,.?~\\-=|\\/"; // Define special characters
  const hasSpecialChar = [...password].some((char) =>
    specialChars.includes(char)
  );

  if (config.specialChar?.allow !== false && !hasSpecialChar) {
    messages.push(
      config.specialChar?.message ||
        "Password must contain at least one special character."
    );
  }

  if (config.specialChar?.allow === false && hasSpecialChar) {
    messages.push(
      config.specialChar?.message ||
        "Password must not contain any special characters."
    );
  }

  const message = messages.length === 0 ? "Password is valid." : messages;

  return { isValid: messages.length === 0, message };
};

export default checkFormatPassword;
