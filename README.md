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

# Credits

These code was written by [Roberto Silva Z.](https://www.linkedin.com/in/robertosilvazuniga/)
