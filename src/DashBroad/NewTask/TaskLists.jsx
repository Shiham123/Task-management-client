import { useQuery } from '@tanstack/react-query';
import useAppContext from '../../Hooks/useAppContext';
import usePublicApi from '../../Hooks/usePublicApi';

const TaskLists = () => {
  const { user } = useAppContext();
  const publicApi = usePublicApi();

  const { data: taskData = [] } = useQuery({
    queryKey: [user?.email, 'task'],
    queryFn: async () => {
      const response = await publicApi.get(`/tasks/${user.email}`);
      return response.data;
    },
  });

  return (
    <div className="grid grid-cols-9 gap-4 my-12">
      {/* div one */}
      <div className="col-span-3 border-2 border-lightOne min-h-screen">
        {taskData.map((item) => {
          const { _id, priority, description, title } = item;
          return (
            <div
              key={_id}
              className="group bg-lightTwo m-4 p-4 rounded-lg hover:bg-transparent border-2 border-lightTwo duration-300"
            >
              <h1 className="text-2xl capitalize font-lora">{title}</h1>
              <p className="text-xl lowercase font-lora">{description}</p>
              <p className="bg-darkThree inline-block px-4 py-2 border-2 border-darkThree text-lightOne text-xl uppercase font-bold font-lora group-hover:bg-transparent group-hover:duration-300 group-hover:text-darkOne">
                {priority}
              </p>
            </div>
          );
        })}
      </div>
      {/* div two */}
      <div className="col-span-3 border-2 border-lightTwo min-h-screen">
        <h2>Div two</h2>
      </div>
      {/* div three */}
      <div className="col-span-3 border-2 border-lightThree min-h-screen">
        <h1>Div three</h1>
      </div>
    </div>
  );
};

export default TaskLists;
