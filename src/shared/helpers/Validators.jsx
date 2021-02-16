import { splitOnSpace } from "./UtilityFunctions";

export const IsValidIdNumber = (idNumber) => {
  return /^[0-9]{13}$/.test(idNumber);
};

/* USERNAME REQUIREMENTS */
export const IsUsernameLongEnough = (userName) => {
  return !!(userName && userName.length >= 7);
};

export const IsUsernameShortEnough = (userName) => {
  return !!(userName && userName.length <= 255);
};

/* PASSWORD REQUIREMENTS */
export const validatePassword = (password) => {
  let passwordValid = {
    isValid: true,
    errors: [
      {
        criteriaMet: true,
        text: "be at least 8 characters long;",
      },
      {
        criteriaMet: true,
        text: "have lower-case (a-z) and upper-case letters (A-Z);",
      },
      {
        criteriaMet: true,
        text: "include a number (0-9); and",
      },
      {
        criteriaMet: true,
        text: "include a special character (@%&!).",
      },
    ],
  };

  if (!IsPasswordLongEnough(password)) {
    passwordValid.isValid = false;
    passwordValid.errors[0].criteriaMet = false;
  }

  if (!HasLowercaseChar(password) || !HasUppercaseChar(password)) {
    passwordValid.isValid = false;
    passwordValid.errors[1].criteriaMet = false;
  }

  if (!HasNumericalChar(password)) {
    passwordValid.isValid = false;
    passwordValid.errors[2].criteriaMet = false;
  }

  if (!HasSpecialChar(password)) {
    passwordValid.isValid = false;
    passwordValid.errors[3].criteriaMet = false;
  }

  return passwordValid;
};

export const IsPasswordLongEnough = (password) => {
  return !!(password && password.length >= 8);
};

export const IsPasswordShortEnough = (password) => {
  return !!(password && password.length <= 255);
};

export const HasUppercaseChar = (value) => {
  if (value && value.length > 0) {
    return value.replace(/[^A-Z]/g, "").length > 0;
  }
  return false;
};

export const HasLowercaseChar = (value) => {
  if (value && value.length > 0) {
    return value.replace(/[^a-z]/g, "").length > 0;
  }
  return false;
};

export const HasNumericalChar = (value) => {
  if (value && value.length > 0) {
    return /\d/.test(value);
  }
  return false;
};

export const HasSpecialChar = (value) => {
  if (value && value.length > 0) {
    return /[~`!@#$%^&*+=\-\[\]\\';,/{}|":<>?]/g.test(value); // eslint-disable-line no-useless-escape
  }
  return false;
};

export const ValuesMatch = (value1, value2) => {
  if (value1 && value1.length > 0 && value2 && value2.length > 0) {
    return value1 === value2;
  }

  return false;
};

export const FormValidateRequiredFields = (values, requiredFields, errors) => {
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "This field is required";
    }
  });
};

export const isPrivateBagValid = (value) => {
  return !!(value && /^[a-zA-Z][0-9]+$/.test(value));
};

export const isLessThanMax = (max, value) => {
  return !(value && value.length > max);
};

export const isMoreThanMin = (min, value) => {
  return !(value && value.length < min);
};

export const isAlphaNumeric = (value) => {
  if (value && value.length > 0) {
    return /^[ A-Za-z0-9]*$/.test(value);
  }

  return false;
};

export const isNumberNumber = (value) => {
  return /^\d+$/.test(value);
};

export const validateBankAccountNumber = (value) => {
  if (!isNumberNumber(value)) {
    return "Only numeric characters";
  } else if (!isLessThanMax(13, value)) {
    return `Must be 13 characters or less`;
  } else if (!isMoreThanMin(7, value)) {
    return `Must be 7 characters or more`;
  }

  return undefined;
};

export const isDuplicateAccount = (accountNumber, branchCode, accounts) => {
  const index = accounts.findIndex((account) => {
    return (
      account.accountNumber === accountNumber &&
      branchCode.includes(account.branchCode)
    );
  });
  return index >= 0;
};

export const initialSurnameValidator = (
  initialMin,
  initialMax,
  surnameMin,
  surnameMax
) => (input) => {
  if (!input) {
    return "Value must not be blank";
  }
  const split = splitOnSpace(input);
  const initials = split[0];
  const surname = split.slice(1).join(" ");
  if (initialMin && initials.length < initialMin) {
    return "Too few initials";
  }
  if (initialMax && initials.length > initialMax) {
    return "Too many initials";
  }
  if (surnameMin && surname.length < surnameMin) {
    return "Surname too short";
  }
  if (surnameMax && surname.length > surnameMax) {
    return "Surname too long";
  }
};

export const isValidCompanyNumber = (number) => {
  if (!number || number.length !== 14) {
    return false;
  }

  if (number.charAt(4) !== "/" || number.charAt(11) !== "/") {
    return false;
  }

  const first4 = number.substring(0, 4);
  const second6 = number.substring(5, 11);
  const last2 = number.substring(12, 14);

  return !(isNaN(first4) || isNaN(second6) || isNaN(last2));
};

export const isValidTrustNumber = (number) => {
  if (!number) {
    return false;
  }

  const first2 = number.substring(0, 2);
  const indexOfSeparator = number.indexOf("/");

  if (indexOfSeparator < 0) {
    return false;
  }

  const second = number.substring(2, indexOfSeparator);
  const last = number.substring(indexOfSeparator + 1);

  if (second.length === 0 || last.length === 0) {
    return false;
  }
  return !(first2.toUpperCase() !== "IT" || isNaN(second) || isNaN(last));
};

export const isValidNPONumber = (number, length) => {
  if (number.charAt(length) !== "-") {
    return false;
  }
  let splitNpoNumber = number.split("-");
  let flag = true;
  splitNpoNumber.forEach((splitNumber) => {
    if (splitNumber.length !== length) {
      flag = false;
    }
    if (!isNumberNumber(splitNumber)) {
      flag = false;
    }
  });

  return flag;
};

export const isValidStateOwnedCompany = (number) => {
  return (
    isValidLastTwoDigits(number, "06") || isValidLastTwoDigits(number, "30")
  );
};

export const isValidLastTwoDigits = (number, companyLastTwo) => {
  const lastTwodigits = number.toString().substr(-2);
  return lastTwodigits === companyLastTwo;
};

export const validateFirstName = (firstName) => {
  const firstNameRegex = /^[a-zA-Z -]{2,50}$/;
  return firstNameRegex.test(firstName);
};

export const validateSurname = (surname) => {
  const surnameRegex = /^[a-zA-Z -]{2,50}$/;
  return surnameRegex.test(surname);
};

export const validateUsername = (username) => {
  return !(!IsUsernameLongEnough(username) || !IsUsernameShortEnough(username));
};

export const validatePassportNumber = (passportNumber) => {
  return passportNumber && passportNumber.length >= 1;
};

export const validatePassportIdNumber = (passportIdNumber) => {
  const passportIdNumberRegex = /^[A-Za-z0-9]{6,13}$/;
  return passportIdNumberRegex.test(passportIdNumber);
};

export const validateIdNumber = (idNumber, dob) => {
  if (!idNumber || idNumber.length !== 13 || isNaN(idNumber)) {
    return false;
  }

  let newDob = dob;
  if (typeof dob === "string") {
    newDob = new Date(dob);
  }

  if (newDob) {
    const strippedDOB =
      newDob.getFullYear() +
      "" +
      (newDob.getMonth() + 1).toLocaleString(undefined, {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      "" +
      newDob.getDate().toLocaleString(undefined, {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    const idDob = idNumber.substring(0, 6);
    if (idDob !== strippedDOB.substring(2, 8)) {
      // First 6 digits should match DOB
      return false;
    }
  }

  // Invalid SA ID number -- Citizen digit
  if (
    !(
      parseInt(idNumber.charAt(10)) === 0 || parseInt(idNumber.charAt(10)) === 1
    )
  ) {
    return false;
  }

  // Final Number Check
  const numberArray = idNumber.split("").map(Number);
  const oddSum =
    numberArray[0] +
    numberArray[2] +
    numberArray[4] +
    numberArray[6] +
    numberArray[8] +
    numberArray[10];
  const evenField =
    parseInt(
      idNumber[1] +
        idNumber[3] +
        idNumber[5] +
        idNumber[7] +
        idNumber[9] +
        idNumber[11]
    ) * 2;
  const evenFieldSum = evenField
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  const fullSum = oddSum + evenFieldSum;

  const year = (
    numberArray[0].toString() + numberArray[1].toString()
  ).toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
  const isYearValid =
    year === "00" || (parseInt(year) >= 1 && parseInt(year) <= 99);
  const month = (
    numberArray[2].toString() + numberArray[3].toString()
  ).toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
  const isMonthValid = parseInt(month) >= 1 && parseInt(month) <= 12;
  const day = (
    numberArray[4].toString() + numberArray[5].toString()
  ).toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
  const isDayValid = parseInt(day) >= 1 && parseInt(day) <= 31;

  if (!(isYearValid && isMonthValid && isDayValid)) {
    return false;
  }

  let compareDigit = 10 - (fullSum % 10);

  // Edge case where digit 13 is a zero then our result is 10 instead of the required 0
  if (compareDigit === 10) {
    compareDigit = 0;
  }

  if (compareDigit !== parseInt(idNumber.charAt(12))) {
    // Invalid SA ID number -- Z digit
    return false;
  }

  // gender check, we have no gender at this stage but this can be added later on
  // const genderDigit = idNumber.substring(6, 7)
  //
  // if (gender === GENDER.FEMALE && genderDigit > 4) {
  //   return false
  // } else if (gender === GENDER.MALE && genderDigit < 5) {
  //   return false
  // }

  return true;
};

export const validateIncomeTaxNumber = (incomeTaxNumber) => {
  if (
    !incomeTaxNumber ||
    incomeTaxNumber.length !== 10 ||
    isNaN(incomeTaxNumber)
  ) {
    return false;
  }

  const incomeTaxNumberArray = incomeTaxNumber.split("").slice(0, -1);

  let totalNumber = 0;

  for (let index = 0; index < incomeTaxNumberArray.length; index++) {
    let indexedNumber = parseInt(incomeTaxNumberArray[index]);
    if (index % 2 === 0) {
      totalNumber = totalNumber + (((indexedNumber * 2 - 1) % 9) + 1);
    } else {
      totalNumber = totalNumber + indexedNumber;
    }
  }

  let lastDigit = incomeTaxNumber % 10; //last Digit of Income Tax Number which need to be validated.

  let checkDigit = 0;

  if (totalNumber % 10 > 0) {
    checkDigit = 10 - (totalNumber % 10);
  }

  if (lastDigit !== checkDigit) {
    return false;
  }

  return true;
};

export const validateGenderOfId = (idNumber, genderType) => {
  const idGender = idNumber.substring(6, 10);
  const genderValue = parseInt(idGender);
  if (genderValue > -1 && genderValue < 5000 && genderType === "Male") {
    return false;
  } else if (
    genderValue > 4999 &&
    genderValue < 10000 &&
    genderType === "Female"
  ) {
    return false;
  } else if (genderValue < 0 || genderValue > 9999) {
    return false;
  }

  return true;
};

export const validateCellphoneNumber = (cellphoneNumber) => {
  const cellphoneNumberRegex = /^[0-9]{9,20}$/;
  return cellphoneNumberRegex.test(cellphoneNumber);
};

export const validateHomeWorkNumber = (number) => {
  const numberRegex = /^(\+?)?\d{2,22}$/;
  return numberRegex.test(number);
};

export const validateUnderAge = (inputDate, inputAge) => {
  if (inputDate) {
    let today = new Date();
    let age = today.getFullYear() - inputDate.getFullYear();
    let m = today.getMonth() - inputDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < inputDate.getDate())) {
      age--;
    }

    if (age < inputAge) {
      return false;
    }
  }

  return true;
};

export const validatePercentageTotal = (percentages) => {
  return (
    getTotalPercentage(percentages) === 100 &&
    validateNoZeroPercentage(percentages)
  );
};

export const getTotalPercentage = (percentages) => {
  let total = 0;

  percentages.forEach((percentage) => {
    total += percentage === "" ? 0 : percentage;
  });

  return total;
};

export const validPortionOfIncome = (income) => {
  return !income || (income >= 5 && income <= 100);
};

export const validateNoZeroPercentage = (percentages) => {
  return !percentages.includes(0);
};

export const validateAllBeneficiariesComplete = (beneficiaries) => {
  let valid = true;
  beneficiaries.forEach((beneficiary) => {
    if (!beneficiary.beneficiaryType) {
      valid = false;
    }
  });

  return valid;
};

export const validateInput = (input) => {
  return input.trim().length > 0;
};

export const validateCareOf = (value) => {
  return value && value.length <= 28 && !/[^a-zA-Z0-9 ]/i.test(value);
};

export const validateAddressLine = (value) => {
  return value && value.length <= 30 && !/[^a-zA-Z0-9 ]/i.test(value);
};

export const ValidateEmailAddress = (email) =>
  validateEmailAddressStructure(email);

const expression = /^\w+([.%-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/; // eslint-disable-line no-useless-escape
export const validateEmailAddressStructure = (emailAddress) => {
  return expression.test(String(emailAddress).toLowerCase());
};
