import React from 'react';
import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div style={{ marginBottom: '20px' }}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={props.id || props.name}>{label} </label>

      <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...field} {...props}  />
      {meta.touched && meta.error ? (
        <div className="italic text-sm text-rose-700">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
