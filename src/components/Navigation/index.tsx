const navItems = ['Features', 'Video Tour', 'Reviews', 'Pricing'];

const Navigation: React.FC = () => {
  return (
    <div className="flex items-center">
      <ul className="menu hidden items-center gap-[31px] text-[15px] text-white md:flex">
        {navItems.map(item => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>

      <button className="rounded-[6px] bg-white p-[13px_20px] text-[14px] font-bold leading-none tracking-[1px] transition-transform duration-200 hover:scale-105">
        GET IT FREE
      </button>
    </div>
  );
};

export default Navigation;
