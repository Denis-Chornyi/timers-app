import { TimerItem } from './index';

type TimerProps = {
  timer: TimerItem;
  time: number;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  formatTime: (ms: number) => string;
};

const Timer: React.FC<TimerProps> = ({ timer, time, onToggle, onDelete, formatTime }) => {
  return (
    <li className="flex items-center justify-between gap-[4px] md:gap-[20px]">
      <div className="group relative">
        <span
          className="block w-[130px] truncate text-start text-[20px] font-[800] text-blue-500"
          title={timer.title}
        >
          {timer.title}
        </span>

        <div className="absolute -top-8 left-0 z-10 hidden whitespace-nowrap rounded bg-gray-500 px-2 py-1 text-xs text-white group-hover:block">
          {timer.title}
        </div>
      </div>

      <div
        className={`m-[0_4px] rounded-md px-6 py-3 text-[17px] md:m-[0_21px_0_38px] ${
          timer.isRunning ? 'bg-gray-200' : 'bg-pink-500/15'
        }`}
      >
        {formatTime(time)}
      </div>

      <div className="flex gap-[4px] md:gap-[20px]">
        <button
          type="button"
          onClick={() => onToggle(timer.id)}
          className={`h-[50px] w-[50px] rounded-full ${
            timer.isRunning
              ? 'bg-gradient-to-br from-[#7956ec] to-[#2fb9f8]'
              : 'bg-gradient-to-br from-[#009fc5] to-[#3cecb0]'
          } flex items-center justify-center text-white`}
          aria-label="Toggle timer"
        >
          {timer.isRunning ? (
            <img src="/images/pause.png" alt="Pause" />
          ) : (
            <img src="/images/play.png" alt="Play" />
          )}
        </button>

        <button
          type="button"
          onClick={() => onDelete(timer.id)}
          className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-gradient-to-r from-pink-500 to-orange-400 text-white"
          aria-label="Delete timer"
        >
          <img src="/images/delete.png" alt="Delete" />
        </button>
      </div>
    </li>
  );
};

export default Timer;
