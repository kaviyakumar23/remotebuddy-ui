export interface TimeZone {
  name: string;
  offset: string;
}

export const timezones: Array<TimeZone> = [
  { name: "Coordinated Universal Time", offset: "UTC+00:00" },
  { name: "European Central Time", offset: "UTC+01:00" },
  { name: "Eastern European Time", offset: "UTC+02:00" },
  { name: "Moscow Time", offset: "UTC+03:00" },
  { name: "Gulf Standard Time", offset: "UTC+04:00" },
  { name: "Pakistan Standard Time", offset: "UTC+05:00" },
  { name: "Indian Standard Time", offset: "UTC+05:30" },
  { name: "Bangladesh Standard Time", offset: "UTC+06:00" },
  { name: "Indochina Time", offset: "UTC+07:00" },
  { name: "China Standard Time", offset: "UTC+08:00" },
  { name: "Japan Standard Time", offset: "UTC+09:00" },
  { name: "Australian Eastern Standard Time", offset: "UTC+10:00" },
  { name: "Solomon Islands Time", offset: "UTC+11:00" },
  { name: "New Zealand Standard Time", offset: "UTC+12:00" },
  { name: "Samoa Standard Time", offset: "UTC+13:00" },
  { name: "Line Islands Time", offset: "UTC+14:00" },
  { name: "Hawaii-Aleutian Standard Time", offset: "UTC-10:00" },
  { name: "Alaska Standard Time", offset: "UTC-09:00" },
  { name: "Pacific Standard Time", offset: "UTC-08:00" },
  { name: "Mountain Standard Time", offset: "UTC-07:00" },
  { name: "Central Standard Time", offset: "UTC-06:00" },
  { name: "Eastern Standard Time", offset: "UTC-05:00" },
  { name: "Atlantic Standard Time", offset: "UTC-04:00" },
  { name: "Newfoundland Standard Time", offset: "UTC-03:30" },
  { name: "Brazil Time", offset: "UTC-03:00" },
  { name: "South Georgia Time", offset: "UTC-02:00" },
  { name: "Azores Standard Time", offset: "UTC-01:00" },
];
