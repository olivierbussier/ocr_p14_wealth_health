import { useRef, useState } from "react";

import "./style.scss";

export const Calendar = ({ className, onDateChange, onBlur, value, changeState}) => {
  const selectedDate = new Date(value)
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  // Fonction pour naviguer au mois précédent
  function prevMonth(e) {
    e.preventDefault();
    const date = new Date(selectedDate);
    date.setMonth(date.getMonth() - 1);
    onDateChange(formatDate(date))
    // console.log("calendar - prev")

  }

  // Fonction pour naviguer au mois suivant
  function nextMonth(e) {
    e.preventDefault();
    const date = new Date(selectedDate);
    date.setMonth(date.getMonth() + 1);
    onDateChange(formatDate(date))
    // console.log("calendar - next")

  }

  // Fonction pour générer les jours du mois
  function generateDays() {
    const days = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day); // new Date(year, month, day);
      const isCurrentMonth = month === date.getMonth();
      const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();

      days.push(
        <div
          className={`day ${isCurrentMonth ? "current-month" : "other-month"} ${
            isSelected ? "selected" : ""
          }`}
          key={date.toDateString()}
          onMouseDown={() => {
            changeState(false)
            onDateChange(formatDate(date));
            // console.log("calendar - mousemove")
          }}
        >
          {day}
        </div>
      );
    }

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.unshift(<div className="day other-month" key={`other-${i}`} />);
    }

    return days;
  }

  return (
    <div className={className} tabIndex={1} onBlur={onBlur}
      // onFocus={()=> console.log("Calendar div - focus")}
      >
      <div className="header">
        <button onClick={prevMonth}>{"<"}</button>
        <h2>
          {selectedDate.toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={nextMonth}>{">"}</button>
      </div>
      <div className="days">
        <div className="day-label">Dim</div>
        <div className="day-label">Lun</div>
        <div className="day-label">Mar</div>
        <div className="day-label">Mer</div>
        <div className="day-label">Jeu</div>
        <div className="day-label">Ven</div>
        <div className="day-label">Sam</div>
        {generateDays()}
      </div>
    </div>
  );
};

const formatDate = (d) => {
  const addZeros = (num, length) => {
    var finalStr = num.toString()
    const lenNum = num.toString().length
    const toBe = length - lenNum
    for (let i=0;i<toBe; i++) {
      finalStr = '0'+finalStr
    }
    return finalStr
  }
  var date = (typeof d !== "object") ? new Date(d) : d;
  const day = addZeros(date.getDate(), 2)
  const month = addZeros(date.getMonth()+1,2)
  const year = addZeros(date.getFullYear(),4)

  return year + "-" + month + "-" + day;
};
/**
 *
 * @param {*} param0
 * @returns
 */
export const InputDate = ({ name, text, value }) => {
  const [calendarSelect, setCalendarSelect] = useState(false);
  const [currentDate, setCurrentDate] = useState(value);
  const inputDateRef = useRef(null)

  return (
    <div className="date-time-picker"
      ref={inputDateRef}
      onBlur={(e) => {
        if (!inputDateRef.current.contains(e.relatedTarget))
          setCalendarSelect(false)
      }}>
      {text ? <label htmlFor={'id-'+name}>{text}</label>: null}
      <input
        name={name}
        id={'id-'+name}
        type="date"
        value={currentDate}
        onChange={(e) => {
          setCurrentDate(e.target.value);
          // console.log("InputDate input - change")

        }}
        onClick={(e) => {
          setCalendarSelect(!calendarSelect);
          // console.log("InputDate input - click")
        }}
        onBlur={(e) => {
          // console.log("InputDate input - blur")
          //setCalendarSelect(false)
        }}
        />
      <Calendar
        value={currentDate}
        className={"calendar" + (calendarSelect ? "" : " hide")}
        changeState={(state) => setCalendarSelect(state)}
        onDateChange={(date) => {
          // setCalendarSelect(false);
          // console.log("InputDate Calendar - datechange")
          setCurrentDate(date);
        }}
        onBlur={() => {
          // console.log("InputDate Calendar - blur")
          setCalendarSelect(false);
        }}
      />
    </div>
  );
};
