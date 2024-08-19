"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, FormikProps } from "formik";
import { FormValues } from "./formschema";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getUserLocation } from "@/utils/geoLocation";
import { useEffect } from "react";
import { getFullTimezoneName } from "@/utils/timezonUtils";

export default function BasicsForm(props: FormikProps<FormValues>) {
  const { setFieldValue, setFieldTouched, values } = props;
  const timezones = useQuery(api.queries.registrationDropdown.getTimezones);
  const countries = useQuery(api.queries.registrationDropdown.getCountries);

  useEffect(() => {
    async function autoFillLocation() {
      const { country_code, timezone } = await getUserLocation();

      // Find matching country in our database
      const matchingCountry = countries?.find((c) => c.code === country_code);
      if (matchingCountry) {
        setFieldValue("country", matchingCountry.code);
        setFieldTouched("country", true);
      }

      // Find matching timezone in our database
      const fullTimezoneName = getFullTimezoneName(timezone);
      const matchingTimezone = timezones?.find((t) => t.name.includes(fullTimezoneName));
      if (matchingTimezone) {
        setFieldValue("timezone", matchingTimezone.name);
        setFieldTouched("timezone", true);
      }
    }

    autoFillLocation();
  }, [countries, timezones, setFieldTouched, setFieldValue]);

  return (
    <>
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" name="fullName" onChange={(e) => setFieldValue("fullName", e.target.value)} />
        <ErrorMessage name="fullName" component="div" className="text-sm text-red-500" />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" onChange={(e) => setFieldValue("email", e.target.value)} />
        <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
      </div>

      <div>
        <Select value={values.country} onValueChange={(value) => setFieldValue("country", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {countries &&
              countries.map((country: any) => (
                <SelectItem key={country._id} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="city">City (Optional)</Label>
        <Input id="city" name="city" onChange={(e) => setFieldValue("city", e.target.value)} />
        <ErrorMessage name="city" component="div" className="text-sm text-red-500" />
      </div>

      <div>
        <Select
          value={values.timezone}
          onValueChange={(value) => {
            setFieldValue("timezone", value);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            {timezones &&
              timezones.map((timezone: any) => (
                <SelectItem key={timezone._id} value={timezone.name}>
                  {timezone.name + " " + timezone.offset}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
