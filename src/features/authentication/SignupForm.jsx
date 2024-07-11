
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSignup from "./useSignup";



function SignupForm() {

  const { handleSubmit, register, formState, reset, getValues } = useForm()
  const { signup, status } = useSignup()
  const { errors } = formState

  function onSubmit(data) {
    const { email, password, fullName } = data
    signup({ fullName, email, password })

    // console.log(data);

  }
  function onError(err) {
    console.log(err);
  }



  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>





      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "required input"
          })}

        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "required input",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "invalid email"
            }
          })}

        />
      </FormRow>




      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}


      >
        <Input
          type=""
          id="password"
          {...register("password", {
            required: "required input",
            minLength: {
              value: 8,
              message: "Password (min 8 characters)"
            }

          })}

        />






      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}
      >
        <Input
          type=""
          id="passwordConfirm"

          {...register("passwordConfirm", {
            required: "required input",
            validate: (value) => value === getValues().password || "passwords need to be the same"
          })}

        />
      </FormRow>










      <FormRow>
        <Button

          variation="secondary"
          type="reset"
          onClick={reset}
        >
          Cancel
        </Button>
        <Button type="submit" >Create new user</Button>
      </FormRow>
    </Form >
  );
}

export default SignupForm;
