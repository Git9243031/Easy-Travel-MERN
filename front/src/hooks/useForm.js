import { useState } from "react";

export const useForm = initialValues => {
  const [state, setState] = useState(initialValues);

  return [
    state,
    ({ target: { name, value } }) => {
      setState(prev => ({ ...prev, [name]: value }));
    },
    setState
  ];
};
