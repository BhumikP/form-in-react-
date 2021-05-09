import React from 'react';
import {UseFormRegister} from 'react-hook-form';
import {IFormValues} from './FormValues';

const Select = React.forwardRef<HTMLSelectElement,
{ label: string } & ReturnType<UseFormRegister<IFormValues>>>(({ onChange, onBlur, name, label }, ref) => (
<>
  <label>{label}</label>
  <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
    <option value="20">20</option>
    <option value="22">22</option>
    <option value="24">24</option>
    <option value="26">26</option>
    <option value="30">30</option>
  </select>
</>
));
export default Select;