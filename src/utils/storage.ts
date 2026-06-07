import { TimerItem } from '../types/timer';

export const STORAGE_KEY = 'timers';

export const saveTimers = (timers: TimerItem[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timers));
};

export const getTimers = (): TimerItem[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    return JSON.parse(saved);
  } catch {
    return [];
  }
};
