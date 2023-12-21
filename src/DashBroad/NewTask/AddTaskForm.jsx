import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import useAppContext from '../../Hooks/useAppContext';

const AddTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();
  const authentication = useAppContext();
  const { user } = authentication;
  const loggedInUserEmail = user?.email;

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form>
        {/* Title */}
        <div className="flex flex-col gap-8 my-8">
          <label
            htmlFor="title"
            className="text-3xl uppercase font-lora font-semibold tracking-widest"
          >
            Title
          </label>
          <input
            type="text"
            placeholder="title"
            className="font-roboto text-2xl p-4 outline-none border-2 border-darkOne rounded-lg"
          />
        </div>

        {/* description */}
        <div className="flex flex-col gap-8 my-8">
          <label
            htmlFor="description"
            className="text-3xl uppercase font-lora font-semibold tracking-widest"
          >
            description
          </label>
          <input
            type="text"
            placeholder="description"
            className="font-roboto text-2xl p-4 outline-none border-2 border-darkOne rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-8 my-8">
          <label
            htmlFor="date"
            className="text-3xl uppercase font-lora font-semibold tracking-widest"
          >
            Set Deadline
          </label>
          <input
            type="date"
            name=""
            id=""
            className="font-lora p-2 rounded-lg text-xl"
          />
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-8 my-8">
          <label
            htmlFor=""
            className="text-3xl uppercase font-lora font-semibold tracking-widest"
          >
            Set Priority
          </label>
          <select
            name=""
            id=""
            className="font-lora text-xl outline-none border-2 border-darkOne rounded-lg p-2"
          >
            <option
              value="low"
              className="font-lora text-xl outline-none border-2 border-darkOne"
            >
              Low Priority
            </option>
            <option
              value="medium"
              className="font-lora text-xl outline-none border-2 border-darkOne"
            >
              Medium Priority
            </option>
            <option
              value="high"
              className="font-lora text-xl outline-none border-2 border-darkOne"
            >
              High Priority
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
