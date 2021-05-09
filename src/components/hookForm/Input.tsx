import {Path,UseFormRegister} from 'react-hook-form';
import {IFormValues} from './FormValues';
type InputProps = {
    label: Path<IFormValues>; 
       register: UseFormRegister<IFormValues>;
    required: boolean;
    type:string;
    
  };
const Input = ({type, label, register, required}: InputProps) => {
    switch(type){
    case "text":
        return(
            <>

            <label>{label}</label>
            <input  {...register(label,{required:`${label} is required` })} />
          </>
        )
    
    case "email":
        return(
            <>

            <label>{label}</label>
            <input  {...register(label,{required:`${label} is required`,pattern:{
                value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message:`Enter ${label} in valid format`
            } })} />
          </>
        )
     default:
            return(
                <>

                <label>{label}</label>
                <input  {...register(label,{required:`${label} is required` })} />
              </>
            )
        }
  
};
  export default Input;