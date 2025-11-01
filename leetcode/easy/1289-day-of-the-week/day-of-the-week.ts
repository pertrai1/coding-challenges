function dayOfTheWeek(day: number, month: number, year: number): string {
    const formattedDate = new Date(year, month - 1, day).getDay();
    const DAYS = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return DAYS[formattedDate];
};