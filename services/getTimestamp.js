const parseDate = timestamp => {
  const parsedDate = Date.parse(timestamp);
  const dateObj = new Date(isNaN(parsedDate) ? timestamp * 1000 : parsedDate);
  return dateObj;
};

const getTimestamp = timestamp => {
  const parsedDate = parseDate(timestamp);
  if (parsedDate) return parsedDate.toString();
};

const getUnixTimestamp = timestamp => {
  const parsedDate = parseDate(timestamp);
  if (parsedDate) return parsedDate.getTime() / 1000;
};

module.exports = { getTimestamp, getUnixTimestamp };
