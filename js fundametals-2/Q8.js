function daysUntilEvent(eventStartDate) {
    /*
      Calculate the number of days between the current date and the event's start date.
  
      Parameters:
        eventStartDate (string or Date): The event's start date in the format "YYYY-MM-DD" or a Date object.
  
      Returns:
        number: The number of days until the event starts.
    */
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  
    // Parse the eventStartDate if it's a string in the format "YYYY-MM-DD"
    const startDate = typeof eventStartDate === 'string' ? new Date(eventStartDate) : eventStartDate;
  
    // Get the current date and time
    const currentDate = new Date();
  
    // Calculate the difference in milliseconds between the two dates
    const timeDifferenceInMilliseconds = startDate.getTime() - currentDate.getTime();
  
    // Convert the time difference to days and round it to the nearest integer
    const daysUntilEvent = Math.ceil(timeDifferenceInMilliseconds / oneDayInMilliseconds);
  
    return daysUntilEvent;
  }
  
  // Example usage: Calculating the days until an event starts
  const eventStartDate = '2023-08-31'; // Event start date in "YYYY-MM-DD" format
  const daysUntilStart = daysUntilEvent(eventStartDate);
  console.log('Days until event starts:', daysUntilStart);
  