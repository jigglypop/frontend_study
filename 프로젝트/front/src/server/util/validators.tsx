interface errorsType {
  usernameValid?: string;
  passwordValid?: string;
  emailValid?: string;
  confirmPasswordValid?: string;
  general?: string;
}

export const validateRegisterInput = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  const errors: errorsType = {};
  if (username.trim() === "") {
    errors.usernameValid = "유저 이름을 입력해 주세요";
  }
  if (email.trim() === "") {
    errors.emailValid = "이메일 값을 입력해 주세요";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.emailValid = "이메일 주소는 반드시 유효한 주소여야 합니다.";
    }
  }
  if (password === "") {
    errors.passwordValid = "패스워드 값을 입력해 주세요";
  } else if (password !== confirmPassword) {
    errors.confirmPasswordValid = "패스워드 값을 같게 입력해 주세요";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const validateLoginInput = (username: string, password: string) => {
  const errors: errorsType = {};
  if (username.trim() === "") {
    errors.usernameValid = "유저 이름을 입력해 주세요";
  }
  if (password.trim() === "") {
    errors.passwordValid = "패스워드 값을 입력해 주세요";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
