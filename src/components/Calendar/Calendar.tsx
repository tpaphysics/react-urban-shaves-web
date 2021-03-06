import { lastDayOfMonth, addMonths } from 'date-fns';
import React, { useEffect, useState } from 'react';

import HeaderPanel from './Header/HeaderPanel';
import MonthDaysPanel from './MonthDaysPanel/MonthDaysPanel';
import { WeekDayPanel } from './WeekDayPanel/WeekDayPanel';
import { months } from './months';
import { weekDays } from './weekDays';

interface DataCalendar {
  year: number;
  month: number;
  lastDayMonth: number;
  primaryWeekDayOfMonth: number;
  weekDayNow: number;
  dayNow: number;
}

export default function Calendar() {
  const [data, setData] = useState<DataCalendar>({} as DataCalendar);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // const date = new Date();
    // console.log(date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const weekDayNow = date.getDay();
    const dayNow = date.getDate();
    const primaryDayOfMonth = new Date(year, month, 1);
    const primaryWeekDayOfMonth = primaryDayOfMonth.getDay();
    const lastDayMonth = lastDayOfMonth(date).getDate();

    setData({
      year,
      month,
      lastDayMonth,
      primaryWeekDayOfMonth,
      weekDayNow,
      dayNow,
    });
    console.log(addMonths(date, 3));
  }, [date]);

  return (
    <>
      <HeaderPanel
        month={months[data.month]}
        year={data.year}

        // eslint-disable-next-line no-console
      />
      <WeekDayPanel weekDays={weekDays} weekDay={data.weekDayNow} />
      <MonthDaysPanel
        dayNow={data.dayNow}
        lastDayOfMonth={data.lastDayMonth}
        cb={(day) => console.log(new Date(data.year, data.month, day))}
        primaryWeekDayOfMonth={data.primaryWeekDayOfMonth} // Ter-Qua-Qui
      />
    </>
  );
}
