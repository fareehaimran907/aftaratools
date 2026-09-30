export function calculateAgeInfo(dob: string | Date, targetDate: Date = new Date()) {
  const birthDate = new Date(dob);
  
  if (isNaN(birthDate.getTime())) {
    throw new Error("Invalid date of birth");
  }

  let years = targetDate.getFullYear() - birthDate.getFullYear();
  let months = targetDate.getMonth() - birthDate.getMonth();
  let days = targetDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years < 0) {
    throw new Error("Date of birth cannot be in the future");
  }

  const totalDays = Math.floor((targetDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
  
  const currentYearBirthday = new Date(targetDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (targetDate.getTime() > currentYearBirthday.getTime() && (targetDate.getDate() !== birthDate.getDate() || targetDate.getMonth() !== birthDate.getMonth())) {
    currentYearBirthday.setFullYear(targetDate.getFullYear() + 1);
  } else if (targetDate.getTime() <= currentYearBirthday.getTime() && targetDate.getDate() === birthDate.getDate() && targetDate.getMonth() === birthDate.getMonth()) {
      // It is exactly their birthday today.
  }
  
  const nextBirthdayDays = Math.ceil((currentYearBirthday.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24));

  return { years, months, days, nextBirthdayDays, totalDays };
}
