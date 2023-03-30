function convertDateRange(dateStr) {
  // Split the date range string into start and end date strings
  const [startDateStr, endDateStr] = dateStr.split(" To ");

  // Convert the start date string to a Date object
  const startDate = new Date(startDateStr);

  // Convert the start date object to the desired date format
  const startDateFormatted = startDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Return the formatted date range string
  return startDateFormatted;
}
export { convertDateRange };
