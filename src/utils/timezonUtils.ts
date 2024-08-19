import { DateTime } from "luxon";

export function getFullTimezoneName(timezone: string): string {
  const dt = DateTime.now().setZone(timezone);
  return dt.offsetNameLong || "Unknown Timezone";
}
