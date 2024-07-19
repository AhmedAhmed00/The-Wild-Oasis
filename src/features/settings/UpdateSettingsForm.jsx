
import FormRow from '../../ui/FormRow';
import Form from './../../ui/Form';
import Input from './../../ui/Input';
import useSettings from './useSettings';
import useUpdateSettings from './useUpdateSettings';

function UpdateSettingsForm() {
  const { data: { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } = {}, isError, isLoading } = useSettings()
  const { data, mutateSettings, status } = useUpdateSettings()

  const isUpdating = status === 'pending'



  function handleUpdateSettings(e, fieldName) {
    const valueToUpdate = e.target.value
    // console.log(valueToUpdate);
    if (!valueToUpdate) return;

    mutateSettings({
      [fieldName]: valueToUpdate
    })
  }

  return (
    <Form>

      <FormRow label='Minimum nights/booking'>
        <Input disabled={isUpdating} defaultValue={minBookingLength} type='number' id='min-nights' onBlur={
          (e) => handleUpdateSettings(e, "minBookingLength")} />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input disabled={isUpdating} defaultValue={maxBookingLength} type='number' id='max-nights' onBlur={
          (e) => handleUpdateSettings(e, "maxBookingLength")} />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input disabled={isUpdating} defaultValue={maxGuestsPerBooking} type='number' id='max-guests' onBlur={
          (e) => handleUpdateSettings(e, "maxGuestsPerBooking")} />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input disabled={isUpdating} defaultValue={breakfastPrice} type='number' id='breakfast-price' onBlur={
          (e) => handleUpdateSettings(e, "breakfastPrice")} />
      </FormRow>

    </Form>
  )
}

export default UpdateSettingsForm;
