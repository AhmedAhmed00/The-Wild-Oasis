import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useLogin from "./useLogin";

function LoginForm() {

  const [email, setEmail] = useState("devahmedahmed@gmail.com");
  const [password, setPassword] = useState("Ahmed@123");
  const { login, status } = useLogin()


  function handleSubmit(e) {
    e.preventDefault()
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button disabled={status === 'pending'} size="large">Login</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
