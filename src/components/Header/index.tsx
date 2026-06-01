import Navigation from '../Navigation';

const Header: React.FC = () => {
  return (
    <section className="bg-[url('/images/header-img.png')] bg-cover bg-no-repeat">
      <div className="relative m-[0_auto] max-w-[1440px] px-[16px] xl:px-[135px]">
        <div className="flex items-center justify-between p-[25px_0_75px_0]">
          <h1 className="text-[20px] font-extrabold leading-[100%] text-white">Timers App</h1>
          <Navigation />
        </div>
        <div className="flex justify-center xl:justify-start">
          <div className="pb-[100px] text-center xl:p-[90px_0_180px_0] xl:text-left">
            <img
              className="inline-block xl:mb-[15.5px] xl:block"
              src="/images/app-icon.png"
              alt="Logo"
            />
            <p className="mb-[36px] max-w-[535px] text-[35px] font-light leading-[50px] tracking-[1px] text-white">
              <span className="font-[800]">Timers App.</span> Best landing page for web and mobile
              apps
            </p>
            <div className="flex justify-center gap-[20px] xl:justify-start">
              <button className="btn">Download Now</button>
              <button className="btn btn-secondary">Watch Video</button>
            </div>
          </div>
          <div>
            <img
              className="absolute right-[179px] top-[137px] hidden xl:block"
              src="/images/Tablet.png"
              alt="tablet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
