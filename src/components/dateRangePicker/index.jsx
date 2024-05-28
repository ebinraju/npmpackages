import React, { useState } from "react";
import WoDateRangePicker from "@wojtekmaj/react-daterange-picker";
import CalendarIcon from "../../icons/calendar.jsx";
import styles from "./index.module.scss";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

export const DateRangePicker = (props) => {
  const { className = "", value: valueProp, onChange, ...rest } = props;
  const [value, setValue] = useState(valueProp || []);

  return (
    <WoDateRangePicker
      dayPlaceholder="dd"
      monthPlaceholder="mm"
      yearPlaceholder="yyyy"
      {...rest}
      value={valueProp || value}
      onChange={(value) => {
        setValue(value);
        if (onChange) onChange(value);
      }}
      format="dd/MM/yyyy"
      className={[styles.date_range_picker, className]}
      calendarIcon={<CalendarIcon />}
    />
  );
};
