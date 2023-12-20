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
      </footer>
    </section>
  );
};

export default FooterSection;
