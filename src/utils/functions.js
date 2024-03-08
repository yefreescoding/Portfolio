export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}

export function formatDateMonth(date) {
  const options = {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en-US", options);
}

export function calculateTimeAgo(timestamp) {
  const date = new Date(timestamp);

  // Define months array for converting month index to month name
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get month name from months array
  const month = months[date.getMonth()];

  // Get day
  let day = date.getDate();
  // Add suffix to day (1st, 2nd, 3rd, etc.)
  const suffixes = ["st", "nd", "rd"];
  const suffix = suffixes[(day - 1) % 10] || "th";
  day += suffix;

  // Get hour and minute
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

// Example usage
const timestamp = Date.now();
const formattedDate = calculateTimeAgo(timestamp);
console.log(formattedDate);
