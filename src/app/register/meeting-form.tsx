"use client";

import { Label } from "@/components/ui/label";
import { ErrorMessage, FieldArray, FormikProps } from "formik";
import { Checkbox } from "@/components/ui/checkbox";
import { FormValues } from "./formschema";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      slots.push(`${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();
export default function MeetingPreferencesForm(props: FormikProps<FormValues>) {
  const { values, setFieldValue } = props;
  return (
    <>
      <FieldArray name="weeklyMeetingTimings">
        {({ push, remove }) => (
          <div className="space-y-4">
            <Label>Weekly Available Time Slots</Label>
            {daysOfWeek.map((day, dayIndex) => (
              <div key={day} className="space-y-2">
                <h3 className="text-lg font-medium">{day}</h3>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <div key={`${day}-${slot}`} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${day}-${slot}`}
                        checked={values.weeklyMeetingTimings.includes(`${day}-${slot}`)}
                        onCheckedChange={(checked) => {
                          const timeSlot = `${day}-${slot}`;
                          const updatedTimings = checked
                            ? [...values.weeklyMeetingTimings, timeSlot]
                            : values.weeklyMeetingTimings.filter((t) => t !== timeSlot);
                          setFieldValue("weeklyMeetingTimings", updatedTimings);
                        }}
                      />
                      <Label htmlFor={`${day}-${slot}`} className="text-sm">
                        {slot}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <ErrorMessage name="weeklyMeetingTimings" component="div" className="text-sm text-red-500" />
          </div>
        )}
      </FieldArray>
    </>
  );
}
