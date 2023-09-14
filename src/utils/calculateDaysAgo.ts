export const calculateDaysAgo = (dateString: string) => {
  const currentDate = new Date();
  const targetDate = new Date(dateString);
  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  // Convert the time difference to days
  const date = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return date;
};
