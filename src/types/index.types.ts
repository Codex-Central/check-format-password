export type TConfig = {
  /**
   * The minimum and maximum length of the password.
   */
  length?: {
    /**
     * The minimum length of the password.
     */
    min: {
      /**
       * Value of the minimum length of the password.
       */
      value: number;
      /**
       * Custom message to display when the password is too short.
       */
      message?: string;
    };
    /**
     * The maximum length of the password.
     */
    max: {
      /**
       * Value of the maximum length of the password.
       */
      value: number;
      /**
       * Custom message to display when the password is too long.
       */
      message?: string;
    };
  };
  /**
   * The allowed characters in the password.
   */
  string?: {
    allow?: boolean;
    /**
     * The allowed uppercase characters in the password.
     */
    message?: string;
    upperCase: {
      /**
       * The allowed uppercase characters in the password.
       */
      allow?: boolean;
      /**
       * Custom message to display when the password does not contain an uppercase letter.
       */
      message?: string;
    };
    lowerCase: {
      /**
       * The allowed lowercase characters in the password.
       */
      allow?: boolean;
      /**
       * Custom message to display when the password does not contain a lowercase letter.
       */
      message?: string;
    };
  };
  /**
   * The allowed numbers in the password.
   */
  number?: {
    /**
     * The allowed numbers in the password.
     */
    allow?: boolean;
    /**
     * Custom message to display when the password does not contain a number.
     */
    message?: string;
  };
  /**
   * The allowed special characters in the password.
   */
  specialChar?: {
    /**
     * The allowed special characters in the password.
     */
    allow?: boolean;
    /**
     * Custom message to display when the password does not contain a special character.
     */
    message?: string;
  };
};
