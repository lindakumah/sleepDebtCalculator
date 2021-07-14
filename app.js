const getSleepHours = day => {
    switch(day){
      case 'Monday':
        return 8;
        break;
      case 'Tuesday':
        return 10;
        break;
      case 'Wednesday':
        return 9;
        break;
      case 'Thursday':
        return 8;
        break;
      case 'Friday':
        return 12;
        break;
      case 'Saturday':
        return 10;
        break;
      case 'Sunday':
        return 11;
        break;
    }
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); 
  };
  
  const getIdealSleepHours = idealHours => idealHours*7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    const sleepDebt = actualSleepHours - idealSleepHours;
    if (actualSleepHours === idealSleepHours) {
    console.log(`You got ${sleepDebt} hours of sleep. perfect!`);
     }else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${sleepDebt} hours of sleep. You slept more than was needed`);
     }else {
    console.log(`You got ${sleepDebt} hours of sleep. Sleep some more!`);
     }
  };
  
  console.log(calculateSleepDebt());