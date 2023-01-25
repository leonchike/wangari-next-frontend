// date conversion
const formatDate = (date, region = "en-uk") => {
  date = new Date(date);
  const options = {
    // weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(region, options);
};

export const formatDateWithTime = (date, region = "en-uk") => {
  date = new Date(date);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString(region, options);
};

export default formatDate;
