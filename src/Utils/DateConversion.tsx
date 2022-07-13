export function getTimeAgo(time: number) {
  const date = new Date(time);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);
  if (seconds < 60) {
    return "just now";
  }
  if (minutes < 60) {
    return minutes + " minutes ago";
  }
  if (hours < 24) {
    return hours + " hours ago";
  }
  if (days < 7) {
    return days + " days ago";
  }
  if (weeks < 4) {
    return weeks + " weeks ago";
  }
  if (months < 12) {
    return months + " months ago";
  }
  return years + " years ago";
}

  export function getDaysAgo(date: number) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return days;
  }

  export function convertDays(days: number) {
    if (days < 7) {
      return "less than 1 week";
    } else if (days < 30) {
      return Math.floor(days / 7) + " weeks";
    } else if (days < 365) {
      return Math.floor(days / 30) + " months";
    } else {
      return "1 year or more";
    }
  }