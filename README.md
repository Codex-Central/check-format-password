# check-format-password

Allow checking password format

## Installation

> `npm install @codexcentral/check-format-password`

## Usage

### 1. Import the function

```javascript
import {
  checkFormatPassword,
  TConfig,
} from "@codexcentral/check-format-password";
```

### 2. Call the function

#### Example 1

```typescript
const config: TConfig = {
  length: {
    min: {
      value: 2,
      message: "Password is too short.",
    },
    max: {
      value: 20,
      message: "Password is too long.",
    },
  }
};
const password = "Password123@";
const result = checkFormatPassword(password, config);

console.log(result);
// {
//   isValid: true,
//   message: "Password is valid."
// }
```

#### Example 2

```typescript
const config = {
  number: {
    allow: true,
    message: "Password must contain at least one number.",
  },
};
const passwordCheck = "Password@";
const result = checkFormatPassword(passwordCheck, config);

console.log(result);
/*
 {
  isValid: false,
  message: [
       'Password must contain at least one number.',
       'Password must contain at least one special character.'
     ]
 }
*/
```

## Attributes of "TConfig"
  
| Attribute | Type | Required | Default |
| --- | --- | --- | --- |
| length | object | false | { min: { value: 8, message: "Password is too short." }, max: { value: 20, message: "Password is too long." } } |
| length.min | object | false | { value: 8, message: "Password is too short." } |
| length.min.value | number | false | 8 |
| length.min.message | string | false | "Password is too short." |
| length.max | object | false | { value: 64, message: "Password is too long." } |
| length.max.value | number | false | 64 |
| length.max.message | string | false | "Password is too long." |
| string | object | false | { allow: true, message: "Password must contain at least one letter." } |
| string.allow | boolean | false | true |
| string.message | string | false | "Password must contain at least one letter." |
| string.upperCase | object | false | { allow: true, message: "Password must contain at least one uppercase letter." } |
| string.upperCase.allow | boolean | false | true |
| string.upperCase.message | string | false | "Password must contain at least one uppercase letter." |
| string.lowerCase | object | false | { allow: true, message: "Password must contain at least one lowercase letter." } |
| string.lowerCase.allow | boolean | false | true |
| string.lowerCase.message | string | false | "Password must contain at least one lowercase letter." |
| number | object | false | { allow: true, message: "Password must contain at least one number." } |
| number.allow | boolean | false | true |
| number.message | string | false | "Password must contain at least one number." |
| specialChar | object | false | { allow: true, message: "Password must contain at least one special character." } |
| specialChar.allow | boolean | false | true |
| specialChar.message | string | false | "Password must contain at least one special character." |

 

# Credits

These code was written by [Roberto Silva Z.](https://www.linkedin.com/in/robertosilvazuniga/)
