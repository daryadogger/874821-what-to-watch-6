const getDuration = (runTime) => {
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

export default getDuration;
