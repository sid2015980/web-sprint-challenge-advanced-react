import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

export const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [values, setValues] = useLocalStorage("form-data", initialValue);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = (e) => {
    e.preventDefault();
      setShowSuccessMessage(true);

    setTimeout(() => {
        setValues(initialValue);
    }, 8000);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setShowSuccessMessage(true);

    setTimeout(() => {
        setValues(initialValue);
    }, 8000);

  };
  return [
    values,
    handleChanges,
    handleSubmit,
    clearForm,
    showSuccessMessage,
    setShowSuccessMessage,
  ];
};
