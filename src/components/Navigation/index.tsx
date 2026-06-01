const navItems = ['Features', 'Video Tour', 'Reviews', 'Pricing'];

const Navigation: React.FC = () => {
  return (
    <div className="flex items-center">
      <ul className="hidden md:flex items-center text-white text-[15px] gap-[31px] menu">
        {navItems.map(item => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>

      <button
        className="font-bold text-[14px] leading-none tracking-[1px]
        p-[13px_20px] bg-white rounded-[6px]
        transition-transform duration-200 hover:scale-105"
      >
        GET IT FREE
      </button>
    </div>
  );
};

export default Navigation;
