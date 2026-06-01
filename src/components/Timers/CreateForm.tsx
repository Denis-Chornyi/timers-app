import { FormEvent } from 'react';

type CreateFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const CreateForm: React.FC<CreateFormProps> = ({
  name,
  setName,
  onSubmit
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-[20px] p-[40px_16px_30px_16px] md:flex-row md:w-[770px] md:justify-center md:px-[140px]"
    >
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Timer Name"
        className="w-full h-[50px] text-[17px] rounded-[6px] border border-[#e7e8ea] bg-[#f8f9fa] px-[20px] md:w-[305px]"
      />

      <button
        type="submit"
        className="w-full min-w-[165px] h-[50px] text-[17px] font-bold text-white tracking-[1px] rounded-[6px] bg-gradient-to-r from-orange-400 to-yellow-300 hover:scale-105 transition md:max-w-[165px]"
      >
        Create Timer
      </button>
    </form>
  );
};

export default CreateForm;