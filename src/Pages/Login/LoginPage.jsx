import { useForm } from 'react-hook-form';
import SectionTitle from '../../SubComponent/SectionTitle';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai';
import useAppContext from '../../Hooks/useAppContext';
import swal from 'sweetalert';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef(null);
  const { loginUserWithEmail, googleLogin, githubLogin } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUserWithEmail(email, password)
      .then((result) => {
        console.log(result);
        formRef.current.reset();
        swal('login successfully', 'you logged in successfully', 'success');
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <SectionTitle
        heading="Login Page"
        subHeading="Already have account sign in here"
      />

      <div className="flex justify-center items-center my-20">
        <div className="bg-colorTwo rounded-lg">
          <form
            className="m-[5rem]"
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
            <div className="form-control my-8">
              <label className="label">
                <span className="font-lora text-2xl uppercase font-semibold tracking-widest">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="outline-none border-[2px] border-lightOne p-4 rounded-lg font-poppins text-2xl"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="font-poppins p-2 text-sm text-red-600 font-light">
                  Email Field is required
                </span>
              )}
            </div>
            <div className="form-control my-8">
              <label className="label">
                <span className="font-lora text-2xl uppercase font-semibold tracking-widest">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="outline-none border-[2px] border-lightOne p-4 rounded-lg font-poppins text-2xl"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="font-poppins p-2 text-sm text-red-600 font-light">
                  Password Field is required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="bg-darkOne text-lightThree px-8 py-2 text-2xl font-lora rounded-lg hover:bg-transparent hover:text-darkOne border-2 border-darkOne">
                Sign In
              </button>
            </div>
          </form>

          {/* Register route */}
          <div className="text-center text-2xl pt-4 pb-12">
            <p className="font-lora text-colorOne capitalize">
              Don&apos; have a account{' '}
              <Link to="/register">
                <span className="font-semibold uppercase">Sign Up</span>
              </Link>
            </p>
            <div
              onClick={handleGoogleLogin}
              className="w-full bg-colorFive flex justify-center items-center p-4 rounded-lg cursor-pointer hover:bg-transparent  border-2 border-colorFive duration-300 gap-4"
            >
              <AiOutlineGoogle size={30} /> <span>Login with google</span>
            </div>
            <div
              onClick={handleGithubLogin}
              className="w-full bg-colorFive my-8 flex justify-center items-center p-4 rounded-lg cursor-pointer hover:bg-transparent  border-2 border-colorFive duration-300 gap-4"
            >
              <AiOutlineGithub size={30} /> <span>Login with github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
