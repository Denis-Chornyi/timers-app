import { useState, useEffect } from 'react';
import Timer from './Timer';
import CreateForm from './CreateForm';

import { normalizeTimer } from '../../utils/normalizeTimer';
import { getDefaultTitle, calculateTime, formatTime } from '../../utils/timer';

export type TimerItem = {
  id: number;
  title: string;
  startTime: number;
  elapsed: number;
  isRunning: boolean;
};

const STORAGE_KEY = 'timers';

const Timers: React.FC = () => {
  const [name, setName] = useState('');

  const [timers, setTimers] = useState<TimerItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) return [];

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed) ? parsed.map(normalizeTimer) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timers));
  }, [timers]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prev => [...prev]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addTimer = () => {
    const newTimer: TimerItem = {
      id: Date.now(),
      title: name.trim() || getDefaultTitle(),
      startTime: Date.now(),
      elapsed: 0,
      isRunning: true
    };

    setTimers(prev => [newTimer, ...prev]);
    setName('');
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
    <div className="flex flex-col items-center gap-[18px] min-h-[840px] pt-[80px] px-[16px] pb-[113px] xl:p-[250px_0_113px]">
      <h2 className="md:max-w-[570px] text-[35px] text-[#282B31] font-[300] leading-[50px] tracking-[1px]">
        <span className="font-[800] mr-[11px]">Why</span>
        do we use it?
      </h2>

      <p className="md:max-w-[570px] text-center text-[#676c75] leading-[30px]">
        This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
        Queen. To her surprise, she lost sight of her in a moment.
      </p>

      <div className="w-full min-h-[190px] mt-[42px] text-center bg-white rounded-xl md:w-auto">
        <CreateForm name={name} setName={setName} onSubmit={addTimer} />

        <span className="block w-full h-[1px] bg-[#e7e8ea]" />

        <ul className="flex flex-col gap-[40px] p-[30px_50px_39px_50px] md:px-[152px]">
          {timers.map(timer => (
            <Timer
              key={timer.id}
              timer={timer}
              time={calculateTime(timer)}
              onToggle={toggleTimer}
              onDelete={deleteTimer}
              formatTime={formatTime}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timers;
