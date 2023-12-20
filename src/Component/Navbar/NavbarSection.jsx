import { NavLink } from 'react-router-dom';
import Logo from '../../assets/calendar-with-checklist-date-schedule-3d-icon-removebg-preview.png';
import { FaBars } from 'react-icons/fa';

const NavbarSection = () => {
  return (
    <div className="navbar bg-lightOne">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                  : 'font-poppins text-darkOne font-semibold px-4 text-2xl'
              }
            >
              Home
            </NavLink>
            <NavLink
              to={'/contact'}
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                  : 'font-poppins text-darkOne font-semibold px-4 text-2xl'
              }
            >
              Contact
            </NavLink>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                  : 'font-poppins text-darkOne  font-semibold px-4 text-2xl'
              }
            >
              About
            </NavLink>
            <NavLink
              to={'/feature'}
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                  : 'font-poppins text-darkOne font-semibold px-4 text-2xl'
              }
            >
              Feature
            </NavLink>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img src={Logo} width={100} height={100} alt="" />
          <h1 className="text-xl font-lora">Task Management</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="flex gap-8">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                  : 'font-poppins text-white font-semibold px-4 text-2xl'
              }
            >
              Home
            </NavLink>
            <NavLink
              to={'/contact'}
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                  : 'font-poppins text-white font-semibold px-4 text-2xl'
              }
            >
              Contact
            </NavLink>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                  : 'font-poppins text-white font-semibold px-4 text-2xl'
              }
            >
              About
            </NavLink>
            <NavLink
              to={'/feature'}
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                  : 'font-poppins text-white font-semibold px-4 text-2xl'
              }
            >
              Feature
            </NavLink>
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavbarSection;
