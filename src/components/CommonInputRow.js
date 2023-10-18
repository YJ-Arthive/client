import React from 'react';

const CommonInputRow = ({
  label,
  name,
  value,
  onChange,
  options,
  type,
  placeholder,
}) => {
  return (
    <tr>
      <th>{label}</th>
      <td>
        {type === 'select' ? (
          <select name={name} value={value} onChange={onChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : type === 'date' ? (
          <input type='date' name={name} value={value} onChange={onChange} />
        ) : (
          <input
            type='text'
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </td>
    </tr>
  );
};

export default CommonInputRow;
