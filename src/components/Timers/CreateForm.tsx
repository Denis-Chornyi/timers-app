import { FormEvent } from 'react';

type CreateFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
};

const CreateForm: React.FC<CreateFormProps> = ({ name, setName, onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-[20px] p-[40px_16px_30px_16px] md:w-[770px] md:flex-row md:justify-center md:px-[140px]"
    >
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Timer Name"
        className="h-[50px] w-full rounded-[6px] border border-[#e7e8ea] bg-[#f8f9fa] px-[20px] text-[17px] md:w-[305px]"
      />

      <button
        type="submit"
        className="h-[50px] w-full min-w-[165px] rounded-[6px] bg-gradient-to-r from-orange-400 to-yellow-300 text-[17px] font-bold tracking-[1px] text-white transition hover:scale-105 md:max-w-[165px]"
      >
        Create Timer
      </button>
    </form>
  );
};

export default CreateForm;
