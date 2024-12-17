
export const Timer = ({time}) => {
    if (time != null) {
      const currentTime = new Date();
      const elapsedTime = Math.abs(currentTime - time);
      const hoursPassed = Math.floor(elapsedTime / (1000 * 60 * 60));
      const daysPassed = Math.floor(hoursPassed / 24);
      const weeksPassed = Math.floor(daysPassed / 7);
      const monthsPassed = Math.floor(daysPassed / 30);
  
      if (hoursPassed < 24 && hoursPassed > 0) {
        return `${hoursPassed} hours ago`; 
      } 
      else if(hoursPassed < 24){
        return "a few minutes ago"; 
      }
      else if (daysPassed === 1) {
        return '1 day ago';
      } else if (daysPassed < 7) {
        return `${daysPassed} days ago`;
      } else if (weeksPassed === 1) {
        return '1 week ago';
      } else if (weeksPassed < 4) {
        return `${weeksPassed} weeks ago`;
      } else if (monthsPassed === 1) {
        return '1 month ago';
      }
       else {
        return `${monthsPassed} months ago`;
      }
    }
    return '';
  };