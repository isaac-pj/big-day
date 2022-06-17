import React, { useCallback, useEffect, useState } from "react";
import { differenceInDays, intervalToDuration, isPast } from "date-fns";
import { BUTTON_TYPES } from "../../constants/general";
import Button from "../../components/button/button";
import Calendar from "../../components/calendar/calendar";
import Section from "../../components/section/section";
import "./sectionDate.style.scss";
import { addLeftZero } from "../../utils/timeUtils";

const SectionDate = () => {
  const [remaningDays, setRemaningDays] = useState(null);
  const [remaningTime, setRemaningTime] = useState(null);

  const today = new Date();
  const bigDay = new Date("07/30/2022 16:00:00");

  const getRemaningTime = (start, end) => {
    const interval = { start, end };
    const { hours, minutes, seconds } = intervalToDuration(interval);
    return `${addLeftZero(hours)}:${addLeftZero(minutes)}:${addLeftZero(
      seconds
    )}`;
  };

  useEffect(() => {
    const intervalId = startTimer();
    setRemaningDays(differenceInDays(bigDay, today));
    return () => clearInterval(intervalId);
  }, []);

  const startTimer = useCallback(() => {
    if (isPast(bigDay)) return;
    return setInterval(() => {
      setRemaningTime(getRemaningTime(bigDay, new Date()));
    }, 1000);
  }, [bigDay]);

  const handleAddToCalendar = useCallback(() => {
    // console.log("add to calendar");
    alert(
      "Sinto muito, você acabou de se desqualificar como padrinho! :) Brinks, mas decore a data por favor, vamos saber disso rsrsrs."
    );
  }, []);

  return (
    <Section title="Data e Hora" id="date">
      <div className="SectionDate">
        <Calendar bigDay={bigDay} />
        <div className="SectionDate__bottomContent">
          <h6 className="SectionDate__text">
            <span>Restam </span>
            <strong>{remaningDays}</strong>
            <span>dias </span>
            <strong>{remaningTime}</strong>
          </h6>
          <Button
            type={BUTTON_TYPES.RAISED}
            text="Adicionar na Agenda"
            onClick={handleAddToCalendar}
          />
        </div>
      </div>
    </Section>
  );
};

export default SectionDate;
