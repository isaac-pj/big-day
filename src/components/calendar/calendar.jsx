import { addDays, isBefore } from "date-fns";
import { format } from "date-fns/esm";
import ptBR from "date-fns/locale/pt-BR";
import React, { memo, useEffect, useRef, useState } from "react";
import "./calendar.style.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Calendar = ({ bigDay }) => {
  const calendarRef = useRef(null);
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today.setHours(16));

  const day = format(currentDate, "dd");
  const month = format(currentDate, "MMMM", { locale: ptBR });
  const year = format(currentDate, "yyyy");
  const time = format(bigDay, "HH:mm");

  useEffect(() => {
    const interval = { id: null };
    const calendarElem = calendarRef?.current;

    ScrollTrigger.create({
      trigger: calendarElem,
      start: "top 400px",
      // markers: true,
      scrub: true,
      onEnter: () => {
        interval.id = rollDate();
      },
      onLeaveBack: () => {
        clearInterval(interval.id);
        setCurrentDate(today);
      },
    });

    return () => clearInterval(interval.id);
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
    <div ref={calendarRef} className="Calendar">
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
      <span className="Calendar__hours">{time}hs</span>
    </div>
  );
};

export default memo(Calendar);
