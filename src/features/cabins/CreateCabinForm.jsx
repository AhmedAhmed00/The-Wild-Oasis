import Input from './../../ui/Input';
import { Textarea } from '../../ui/Textarea';
import FileInput from './../../ui/FileInput';
import Button from './../../ui/Button';
import Form from './../../ui/Form';
import { useForm } from "react-hook-form";
import useCreateCabin from "./useCreateCabin";
import useUpdateCabin from "./useUpdateCabin";
import FormRow, { Error, Label } from "../../ui/FormRow";




function CreateCabinForm({ editedCabinData = {}, handleCloseModal }) {
  const { id: editID, ...editedValues } = editedCabinData
  const isEditSession = Boolean(editID)
  const { register, formState: { errors }, getValues, handleSubmit } = useForm({
    defaultValues: isEditSession ? editedValues : {}

  })

  const { addNewCabin, deletingStatus } = useCreateCabin()

  const { updateCabin, editingStatus } = useUpdateCabin()

  const isLoadingStatus = (deletingStatus === 'pending' || editingStatus === 'pending')




  function onSumbit(newCabin) {

    const image = typeof newCabin.image === 'string' ? newCabin.image : newCabin.image[0]
    if (isEditSession) updateCabin({ newCabinData: { ...newCabin, image: image }, id: editID }, {
      onSuccess: () => {
        handleCloseModal?.()
      }
    })
    else addNewCabin({ ...newCabin, image: image }, {
      onSuccess: () => {
        handleCloseModal?.()
      }
    })
  }


  return (
    <Form onSubmit={handleSubmit(onSumbit)} type={handleCloseModal ? 'modal' : 'regular'}>



      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input disabled={isLoadingStatus} type="text" id="name"  {...register("name", {
          required: "the name is required input",
          minLength: {
            value: 3,
            message: "should contain 3 letters at least"
          }
        })} />
        {errors?.name?.message && <Error >{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input disabled={isLoadingStatus} type="number" id="maxCapacity" {...register("maxCapacity", {
          required: "this field is required ",
          validate: (value) => value < 10 || "Should be less than 10 guests"
        })} />
        {errors?.maxCapacity?.message && <Error >{errors.maxCapacity.message}</Error>}


      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input disabled={isLoadingStatus} type="number" id="regularPrice" {...register("regularPrice", {
          required: "this field is required ",
          validate: (value) => value > 100 || "must be greater than 100"
        })} />
        {errors?.regularPrice?.message && <Error >{errors.regularPrice.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input disabled={isLoadingStatus} type="number" id="discount" defaultValue={0} {...register("discount", {
          required: "this field is required ",
          validate: (value) => value <= getValues().regularPrice || "cannot be greater the the regular price"

        })} />
        {errors?.discount?.message && <Error >{errors.discount.message}</Error>}

      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea disabled={isLoadingStatus} type="number" id="description" defaultValue=""  {...register("description", {
          required: "this field is required "

        })} />
        {errors?.description?.message && <Error >{errors.image.message}</Error>}

      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput disabled={isLoadingStatus} type="file" id="image" accept="image/*"  {...register("image", {
          required: "this field is required "
        })} />
        {errors?.image?.message && <Error >{errors.image.message}</Error>}

      </FormRow>

      <FormRow>
        <Button onClick={() => handleCloseModal?.()} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoadingStatus} >
          {isEditSession ? "Update cabin data" : "Add New Cabin "}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
