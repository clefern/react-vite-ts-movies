import React from 'react'

interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: number;
}

const SelectOption: React.FC<SelectOptionProps> = ({ label, value, ...rest}: SelectOptionProps) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  )
}

export default SelectOption