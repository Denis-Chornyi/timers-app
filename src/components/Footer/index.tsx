const Footer: React.FC = () => {
  return (
    <section className="bg-[#fff] shadow-[0px_-1px_1px_-1px_rgba(0,_0,_0,_0.4)]">
      <div className="m-[0_auto] flex min-h-[110px] items-center px-[16px] xl:px-[135px]">
        <div className="m-[0_auto] flex w-[1440px] items-center justify-between">
          <h1 className="text-[20px] font-[800]">Timers App</h1>
          <div className="ml-[12px] hidden text-center text-[11px] tracking-[0.17px] text-[#676c75] md:block">
            <p className="flex items-center text-[#999EA8]">
              Created with
              <img
                src="/images/HeartIcon.png"
                alt="Heart"
                className="m-[0_3px] h-[11px] w-[12px]"
              />
              by <b className="ml-[4px]">Sergey Azovskiy</b>
            </p>
            <p className="mt-[8px] text-[#999EA8]">© Timers App, 2025</p>
          </div>
          <div className="flex justify-between">
            <figure className="flex h-[40px] w-[40px] items-center justify-center rounded-l-md border border-[0.5px] border-r-0 border-gray-300">
              <img src="/images/Twitter.png" alt="Twitter" />
            </figure>
            <figure className="social-icon">
              <img src="/images/Facebook.png" alt="Facebook" />
            </figure>
            <figure className="flex h-[40px] w-[40px] items-center justify-center rounded-r-md border border-[0.5px] border-l-0 border-gray-300">
              <img src="/images/Instagram.png" alt="Instagram" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
