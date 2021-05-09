import { useForm } from "react-hook-form";
import "./hookForm.css";
export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          {...register("email", { required: ` required ` })}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <p className="alert alert-danger">Required </p>}
        <input type="submit" />
      </form>
    </div>
  );
}
