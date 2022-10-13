import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const DashboardCalender = () => {
  const date = new Date();
  const defaultFrom = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  const defaultTo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  const defaultValue = {
    from: defaultFrom,
    to: defaultTo,
  };
  const [selectedDayRange, setSelectedDayRange] = useState(defaultValue);
  console.log(selectedDayRange);
  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      colorPrimary='#ff9900'
      colorPrimaryLight='rgb(241, 191, 116)'
      calendarTodayClassName='custom-today-day'
      shouldHighlightWeekends
    />
  );
};

export default DashboardCalender;
