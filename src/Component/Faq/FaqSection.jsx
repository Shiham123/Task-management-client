import { useState } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const FaqSection = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="lg:m-[10rem] md:m-[3rem] m-[1rem]">
      <div className="gap-3 mb-[5rem] mt-5 px-1 lg:px-0 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-darkOne font-lora uppercase">
          Faq
        </h1>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkTwo capitalize font-lora">
          Why you choose us!
        </h1>
      </div>

      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <h1 className="font-poppins font-normal lg:text-4xl md:text-4xl text-3xl text-darkOne tracking-widest">
            What is and how does it work?
          </h1>
        </AccordionHeader>
        <AccordionBody>
          <p className="font-normal text-darkOne text-xl md:text-2xl lg:text-2xl tracking-widest">
            <span className="font-bold">Task Management</span> is a task
            management platform designed to help individuals and teams organize,
            track, and collaborate on tasks efficiently. It works by providing a
            centralized space where users can create tasks, assign them to team
            members, set deadlines, and monitor progress.
          </p>
        </AccordionBody>
      </Accordion>
      {/*  */}
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <h1 className="font-poppins font-normal lg:text-4xl md:text-4xl text-3xl text-darkOne tracking-widest">
            How can I create a new task on{' '}
            <span className="font-semibold">Task Management</span>?
          </h1>
        </AccordionHeader>
        <AccordionBody>
          <p className="font-normal text-darkOne text-xl md:text-2xl lg:text-2xl tracking-widest">
            To create a new task, simply log in to your account, navigate to the
            task creation section, and fill in the required details such as task
            name, description, assignee, and due date. Click &apos;Save&apos; to
            add the task to your list.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <h1 className="font-poppins font-normal lg:text-4xl md:text-4xl text-3xl text-darkOne tracking-widest">
            Can I assign tasks to specific team members?
          </h1>
        </AccordionHeader>
        <AccordionBody>
          <p className="font-normal text-darkOne text-xl md:text-2xl lg:text-2xl tracking-widest">
            Yes, <span className="font-semibold">Task Management</span> allows
            you to assign tasks to specific team members. When creating or
            editing a task, you can select the assignee from your team members.
          </p>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default FaqSection;
