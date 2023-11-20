import { useCallback, useState, useEffect } from "react";
import validator from "email-validator";

function useFormWithValidation() {
  const [values, setValues] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({});
  const [isFormValid, setFormValid] = useState(false);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      let emailError = "";
      let nameError = "";

      if (name === "name" && !/^[a-zA-Zа-яА-Я\s\-]+$/.test(value)) {
        nameError =
          "Имя должно содержать только кириллицу, латиницу, пробел или дефис.";
      }

      if (name === "email" && !validator.validate(value)) {
        emailError = "Необходимо указать e-mail в формате name@domain.zone";
      }

      setErrors({
        ...errors,
        email: emailError,
        name: nameError,
      });
      setValues({ ...values, [name]: value });
    },
    [values, errors]
  );

  const checkFormValidity = useCallback(() => {
    const isEmailValid = validator.validate(values.email);
    const isNameValid =
      !values.name || /^[a-zA-Zа-яА-Я\s\-]+$/.test(values.name);

    setFormValid(isEmailValid && isNameValid);
  }, [values]);

  useEffect(() => {
    checkFormValidity();
  }, [values, checkFormValidity]);

  return {
    values,
    errors,
    isFormValid,
    onChange: handleInputChange,
    setValues,
    setFormValid,
  };
}

export default useFormWithValidation;
