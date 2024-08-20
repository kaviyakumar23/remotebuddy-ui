"use client";

import { Label } from "@/components/ui/label";
import { FormikProps } from "formik";
import { Checkbox } from "@/components/ui/checkbox";
import { FormValues } from "./formschema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
type DayOfWeek = (typeof daysOfWeek)[number];
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      slots.push(time);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

export interface MeetingPreference {
  day: DayOfWeek;
  startTime: string;
  endTime: string;
}

interface MeetingPreferencesProps {
  preferences: MeetingPreference[];
  setPreferences: React.Dispatch<React.SetStateAction<MeetingPreference[]>>;
}
export default function MeetingPreferencesForm(props: FormikProps<FormValues>) {
  const { values, setFieldValue } = props;
  const preferences = values.meetingPreferences;

  const setPreferences = (newPreferences: MeetingPreference[]) => setFieldValue("meetingPreferences", newPreferences);
  const handleDayChange = (day: DayOfWeek, isChecked: boolean) => {
    if (isChecked) {
      setPreferences([...preferences, { day, startTime: "09:00", endTime: "17:00" }]);
    } else {
      setPreferences(preferences.filter((pref) => pref.day !== day));
    }
  };

  const handleTimeChange = (day: string, type: "startTime" | "endTime", value: string) => {
    setPreferences(preferences.map((pref) => (pref.day === day ? { ...pref, [type]: value } : pref)));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Meeting Preferences</h3>
      {daysOfWeek.map((day) => (
        <div key={day} className="flex items-center space-x-4">
          <Checkbox
            id={day}
            checked={preferences.some((pref) => pref.day === day)}
            onCheckedChange={(checked) => handleDayChange(day, checked as boolean)}
          />
          <Label htmlFor={day}>{day}</Label>
          {preferences.some((pref) => pref.day === day) && (
            <>
              <Select
                value={preferences.find((pref) => pref.day === day)?.startTime}
                onValueChange={(value) => handleTimeChange(day, "startTime", value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Start Time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span>to</span>
              <Select
                value={preferences.find((pref) => pref.day === day)?.endTime}
                onValueChange={(value) => handleTimeChange(day, "endTime", value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="End Time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
