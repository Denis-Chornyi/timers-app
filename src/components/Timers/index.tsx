import { useState, useEffect } from 'react';
import Timer from '../Timer';
import CreateForm from '../CreateForm';
import { getTimers, saveTimers } from '../../gateways/';
import { getDefaultTitle } from '../../utils/';
import { TimerItem } from '../../types';

const Timers: React.FC = () => {
  const [timers, setTimers] = useState<TimerItem[]>(getTimers);

  useEffect(() => {
    saveTimers(timers);
  }, [timers]);

  const addTimer = (title: string) => {
    const now = Date.now();

    const newTimer: TimerItem = {
      id: now,
      title: title.trim() || getDefaultTitle(),
      startTime: now,
      elapsed: 0,
      isRunning: true
    };

    setTimers(prev => [newTimer, ...prev]);
  };

  const toggleTimer = (id: number) => {
    setTimers(prev =>
      prev.map(timer => {
        if (timer.id !== id) return timer;

        if (timer.isRunning) {
          return {
            ...timer,
            isRunning: false,
            elapsed: timer.elapsed + (Date.now() - timer.startTime)
          };
        }

        return {
          ...timer,
          isRunning: true,
          startTime: Date.now()
        };
      })
    );
  };

  const deleteTimer = (id: number) => {
    setTimers(prev => prev.filter(timer => timer.id !== id));
  };

  return (
    <div className="flex min-h-[840px] flex-col items-center gap-[18px] px-[16px] pb-[113px] pt-[80px] xl:p-[250px_0_113px]">
      <h2 className="text-[35px] font-[300] leading-[50px] tracking-[1px] text-[#282B31] md:max-w-[570px]">
        <span className="mr-[11px] font-[800]">Why</span>
        do we use it?
      </h2>

      <p className="text-center leading-[30px] text-[#676c75] md:max-w-[570px]">
        This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
        Queen. To her surprise, she lost sight of her in a moment.
      </p>

      <div className="mt-[42px] min-h-[190px] w-full rounded-xl bg-white text-center md:w-auto">
        <CreateForm onSubmit={addTimer} />

        <span className="block h-[1px] w-full bg-[#e7e8ea]" />

        <ul className="flex flex-col gap-[40px] p-[30px_50px_39px_50px] md:px-[152px]">
          {timers.map(timer => (
            <Timer key={timer.id} timer={timer} onToggle={toggleTimer} onDelete={deleteTimer} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timers;
