import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import FooterLogo from '../../assets/calendar-with-checklist-date-schedule-3d-icon-removebg-preview.png';

const FooterSection = () => {
  return (
    <section className="mt-[10rem]">
      <footer className="footer footer-center p-10 bg-lightOne text-darkOne">
        <aside>
          <div>
            <img width={200} className="rounded-full" src={FooterLogo} alt="" />
          </div>
          <p className="font-lora font-semibold py-4 text-xl md:text-2xl lg:text-3xl tracking-widest">
            Task management <br />
            Providing reliable tech since 2023
          </p>
          <p className="font-lora font-semibold py-4 text-sm md:text-xl lg:text-2xl tracking-widest">
            Copyright © 2023 - All right reserved
          </p>
        </aside>

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/fairoz.rahaman.1"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={50} className="text-darkTwo cursor-pointer" />
          </a>

          <a
            href="https://www.instagram.com/shihamusuf/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={50} className="text-darkTwo cursor-pointer" />
          </a>

          <a
            href="https://twitter.com/ShihamUsuf"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={50} className="text-darkTwo cursor-pointer" />
          </a>

          <a
            href="https://www.linkedin.com/in/shiham-bin-yousuf-1094841bb/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={50} className="text-darkTwo cursor-pointer" />
          </a>

          <a
            href="https://github.com/Shiham123"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={50} className="text-darkTwo cursor-pointer" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
