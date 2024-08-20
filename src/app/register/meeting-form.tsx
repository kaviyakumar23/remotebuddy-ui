import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { FormikProps } from "formik";
import { FormValues } from "./formschema";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const hourIntervals = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, "0")}:00`);

export interface MeetingPreference {
  [day: string]: {
    [hour: string]: boolean;
  };
}

export default function MeetingPreferencesForm({ values, setFieldValue }: FormikProps<FormValues>) {
  const availability: MeetingPreference = values.meetingPreferences || {};

  const toggleAvailability = (day: string, hour: string) => {
    const newAvailability = { ...availability };
    if (!newAvailability[day]) {
      newAvailability[day] = {};
    }
    newAvailability[day][hour] = !newAvailability[day][hour];
    setFieldValue("availability", newAvailability);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border">Time</th>
            {daysOfWeek.map((day) => (
              <th key={day} className="p-2 border">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hourIntervals.map((hour) => (
            <tr key={hour}>
              <td className="p-2 border">{hour}</td>
              {daysOfWeek.map((day) => (
                <td key={`${day}-${hour}`} className="p-2 border text-center">
                  <Checkbox checked={availability[day]?.[hour] || false} onCheckedChange={() => toggleAvailability(day, hour)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
