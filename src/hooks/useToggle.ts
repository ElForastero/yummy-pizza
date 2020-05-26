import { useState } from 'react';

export const useToggle = (initial: boolean = false) => {
  const [value, setValue] = useState(initial);

  const on = () => setValue(true);
  const off = () => setValue(false);
  const toggle = () => setValue(!value);

  return { value, on, off, toggle };
};
