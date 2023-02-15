// date conversion
const formatDate = (date: string | Date, region = "en-uk") => {
  date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    // weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(region, options);
};

export const formatDateWithTime = (date: string | Date, region = "en-uk") => {
  date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
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
