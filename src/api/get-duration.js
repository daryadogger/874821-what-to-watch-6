import {SECONDS_IN_HOUR} from "../const";

const getDuration = (runTime) => {
  const hours = Math.floor(runTime / SECONDS_IN_HOUR);
  const minutes = runTime % SECONDS_IN_HOUR;
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

export default getDuration;

