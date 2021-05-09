
import {useForm} from "react-hook-form";
import Input from './Input';
import Select from './Select';
import {IFormValues} from './FormValues'; 

const Form = () => {
  const { register, handleSubmit ,formState:{errors}} = useForm<IFormValues>({mode:"all"});

  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data));
  };

  return (
      <div className="div">
    <form  onSubmit={handleSubmit(onSubmit)}>
        <header><h1>Form With Typescript</h1> </header>
      <Input type="text"  label="First Name" register={register} required />
      {errors['First Name'] && <p style={{color:'red'}}>{errors['First Name'].message}</p>}
      <Input  type="text" label="Last Name" register={register} required />
      {errors['Last Name'] && <p style={{color:'red'}}>{errors['Last Name'].message}</p>}
      <Input  type="email" label="Email" register={register} required />
      {errors['Email'] && <p style={{color:'red'}}>{errors['Email'].message}</p>}
      <Select label="Age" {...register("Age")}  />
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
};
export default Form;