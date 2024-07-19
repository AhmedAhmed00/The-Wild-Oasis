
import { useState } from 'react';
import Button from '../../ui/Button';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useUpdateUser from './useUpdateUser';
import useUser from './useUser';


function UpdateUserDataForm() {
  // We don't need the loading state
  const { isAuthenticated, isError, isLoading, user: { email, user_metadata: { fullName: currentFullName } } } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  const { updateUser, status } = useUpdateUser();
  const isUpdating = status === 'pending'

  function handleSubmit(e) {
    e.preventDefault();
    console.log(fullName);
    if (!fullName) return;
    updateUser(
      { fullName }
    );
  }

  function handleCancel(e) {

    setFullName(currentFullName);
    setAvatar(null);
  }

  return (

    <Form onSubmit={handleSubmit}>
      <FormRow label='Email address'>
        <Input value={email} disabled />
      </FormRow>
      <FormRow label='Full name'>
        <Input
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
          id='fullName'
        />
      </FormRow>

      <FormRow>
        <Button onClick={handleCancel} type='reset' variation='secondary'>
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
