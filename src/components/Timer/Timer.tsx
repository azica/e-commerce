import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

import { Time, Times, Wrapper } from "./styles";

type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

const calculateTimeLeft = (endTime: Date): TimeLeft => {
  const difference = Number(endTime) - Number(new Date());
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const Timer = ({ endTime }: { endTime: string }) => {
  const endTimeDate = new Date(endTime);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(endTimeDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTimeDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTimeDate]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft[key]) {
      return;
    }

    timerComponents.push(
      <Time key={interval}>
        <Typography variant="h5" color="primary.700">
          {timeLeft[key]}
        </Typography>
        <span>{interval}</span>
      </Time>,
    );
  });

  return (
    <Wrapper>
      <Typography variant="body2" fontFamily="fontFamily.interRegular" color="primary.500">
        Offer expires in:
      </Typography>
      <Times>{timerComponents.length ? timerComponents : <span>Timevvs up!</span>}</Times>
    </Wrapper>
  );
};
