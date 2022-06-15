import { addDays, isBefore, subDays } from "date-fns";
import { format } from "date-fns/esm";
import ptBR from "date-fns/locale/pt-BR";
import React, { memo, useEffect, useState } from "react";
import "./calendar.style.scss";

const Calendar = ({ bigDay }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const day = format(currentDate, "dd");
  const month = format(currentDate, "MMMM", { locale: ptBR });
  const year = format(currentDate, "yyyy");

  useEffect(() => {
    const intervalId = rollDate();
    return () => clearInterval(intervalId);
  }, []);

  const rollDate = () => {
    if (!isBefore(currentDate, bigDay)) return;
    return setInterval(() => {
      setCurrentDate((prevDate) => {
        return isBefore(prevDate, bigDay) ? addDays(prevDate, 1) : prevDate;
      });
    }, 40);
  };

  return (
    <div className="Calendar">
      <header className="Calendar__header">
        <div className="Calendar__brackets">
          <div className="Calendar__hole">
            <div className="Calendar__wire"></div>
          </div>
          <div className="Calendar__hole">
            <div className="Calendar__wire"></div>
          </div>
        </div>

        <div className="Calendar__text">
          <span className="Calendar__month">{month}</span>
          <span className="Calendar__year">{year}</span>
        </div>
      </header>
      <div className="Calendar__inner">
        <span className="Calendar__day">{day}</span>
      </div>
    </div>
  );
};

export default memo(Calendar);
