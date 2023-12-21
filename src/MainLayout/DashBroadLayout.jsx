import { NavLink } from 'react-router-dom';

const DashBroadLayout = () => {
  return (
    <div>
      <div className="w-64 min-h-screen bg-lightOne">
        <div className="px-8 my-12">
          <h1 className="font-lora font-[900] text-[23px] text-darkOne">
            Admin
          </h1>
          <h2 className="font-lora text-[17px] font-bold text-darkOne tracking-[7px]">
            DashBroad
          </h2>
        </div>
        <ul className="px-8">
          <div className="flex flex-col gap-8">
            <li>
              <NavLink
                to="/dashBroad/charts"
                className={({ isActive }) =>
                  isActive
                    ? 'text-lightTwo bg-darkOne px-4 py-2 rounded-lg text-3xl font-semibold font-lora'
                    : 'text-3xl text-lightThree font-semibold font-lora'
                }
              >
                OverView
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashBroadLayout;
