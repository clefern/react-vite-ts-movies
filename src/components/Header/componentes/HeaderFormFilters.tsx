import React from 'react'
import SelectGroup from '../../Select/SelectGroup';
import { FaLocationDot } from 'react-icons/fa6';
import SelectOption from '../../Select/SelectOption';

const cities = [
  { value: 1, label: 'São Paulo' },
  { value: 2, label: 'Rio de Janeiro' },
  { value: 3, label: 'Belo Horizonte' },
  { value: 4, label: 'Salvador' },
  { value: 5, label: 'Curitiba' },
];

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectGroup id='cidade' icon={<FaLocationDot />} placeholder='Cidade'>
        {cities.map((city) => (
          <SelectOption key={city.value} value={city.value} label={city.label}>
            {city.label}
          </SelectOption>
        ))}
      </SelectGroup>
    </form>
  )
}

export default HeaderFormFilters