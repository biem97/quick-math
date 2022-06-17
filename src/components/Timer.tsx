import { Progress } from "@mantine/core";
import { useEffect, useState } from "react";

import { useGameStore } from "../core/store";

const TIMER_UPDATE_INTERVAL = 100; // Milliseconds

const Timer = () => {
  const [value, setValue] = useState(100);
  const { score, timeoutDuration, end } = useGameStore(
    ({ score, timeoutDuration, actions: { end } }) => ({
      score,
      end,
      timeoutDuration,
    })
  );

  // Calculate how fast the timer should go
  const totalUpdates = timeoutDuration / TIMER_UPDATE_INTERVAL;
  const speed = 100 / totalUpdates;

  useEffect(() => {
    setValue(100);
    let timeout = setTimeout(() => {
      // Timeout ends this game
      end();
    }, timeoutDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [score]);

  useEffect(() => {
    let interval = setInterval(() => {
      setValue((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - speed;
      });
    }, TIMER_UPDATE_INTERVAL);

    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  return <Progress value={value} />;
};

export default Timer;
