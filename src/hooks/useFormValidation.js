import { useCallback, useState, useEffect } from "react";
import validator from "email-validator";

function useFormWithValidation() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    search: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setFormValid] = useState(false);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      let emailError = "";
      let nameError = "";
      let searchError = "";

      if (name === "name" && !/^[a-zA-Zа-яА-Я\s\-]+$/.test(value)) {
        nameError =
          "Имя должно содержать только кириллицу, латиницу, пробел или дефис.";
      }

      if (name === "email" && !validator.validate(value)) {
        emailError = "Необходимо указать e-mail в формате name@domain.zone";
      }

      if (name === "search" && value.length === 0) {
        searchError = "Нужно ввести ключевое слово";
      }

      setErrors({
        ...errors,
        email: emailError,
        name: nameError,
        search: searchError,
      });
      setValues({ ...values, [name]: value });
    },
    [values, errors]
  );

  const checkFormValidity = useCallback(() => {
    const isEmailValid = validator.validate(values.email);
    const isNameValid =
      !values.name || /^[a-zA-Zа-яА-Я\s\-]+$/.test(values.name);
    const isPasswordValid = values.password?.length !== 0;

    setFormValid(isEmailValid && isNameValid && isPasswordValid);
  }, [values]);

  const resetValidation = (isFormValid = false, values = {}, errors = {}) => {
    setFormValid(isFormValid);
    setValues({ values });
    setErrors(errors);
  };

  useEffect(() => {
    checkFormValidity();
  }, [values, checkFormValidity]);

  return {
    values,
    errors,
    isFormValid,
    handleInputChange,
    setValues,
    setFormValid,
    resetValidation,
  };
}

export default useFormWithValidation;
