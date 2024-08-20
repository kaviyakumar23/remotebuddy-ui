import * as Yup from "yup";
import { MeetingPreference } from "./meeting-form";

const validationSchema = Yup.object({
  // 1. Full name
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),

  // 2. Email
  email: Yup.string().email("Invalid email address").required("Email is required"),

  // 3. Company
  company: Yup.string().required("Company name is required").max(100, "Company name must be less than 100 characters"),

  // 4. Industry
  industry: Yup.string().required("Industry is required"),

  // 5. Remote work status
  remoteWorkStatus: Yup.string()
    .oneOf(["full-remote", "hybrid", "office-based"], "Invalid remote work status")
    .required("Remote work status is required"),

  // 6. Years of remote experience
  yearsRemoteExperience: Yup.number()
    .min(0, "Experience cannot be negative")
    .max(50, "Please enter a realistic value")
    .required("Years of remote experience is required"),

  // 7. Preferred work hours
  preferredWorkHours: Yup.string()
    .oneOf(["early-bird", "night-owl", "regular"], "Invalid work hours preference")
    .required("Preferred work hours is required"),

  // 8. Bio
  bio: Yup.string().max(500, "Bio must be 500 characters or less").required("Bio is required"),

  // 9. Job title (part of basic information)
  jobTitle: Yup.string().required("Job title is required").max(100, "Job title must be less than 100 characters"),

  // 10. Country
  country: Yup.string().required("Country is required"),

  // 11. City (optional)
  city: Yup.string().max(50, "City name must be less than 50 characters"),

  // 12. Time zone
  timezone: Yup.string().required("Time zone is required"),

  // 13. LinkedIn verification
  linkedInVerified: Yup.boolean().default(false),

  // 15. Skills
  skills: Yup.array().of(Yup.string()).min(1, "At least one skill is required").required("Skills are required"),

  // 16. Interests or hobbies
  interests: Yup.array().of(Yup.string()).min(1, "At least one interest is required").required("Interests are required"),

  hobbies: Yup.array().of(Yup.string()).min(1, "At least one hobby is required").required("Hobbies are required"),

  // 17. Preferred meeting frequency
  preferredMeetingFrequency: Yup.string()
    .oneOf(["weekly", "biweekly", "monthly"], "Invalid meeting frequency")
    .required("Preferred meeting frequency is required"),

  // 18. Preferred working environment
  preferredWorkingEnvironment: Yup.array()
    .of(Yup.string().oneOf(["home-office", "co-working-space", "coffee-shops", "other"]))
    .min(1, "At least one preferred working environment is required")
    .required("Preferred working environment is required"),

  // 19. Weekly meeting timings
  meetingPreferences: Yup.array()
    .of(
      Yup.object({
        day: Yup.string().oneOf(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]).required(),
        time: Yup.string()
          .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
          .required(),
      })
    )
    .min(1, "At least one meeting time is required")
    .required("Weekly meeting timings are required"),
});

export default validationSchema;

export interface FormValues {
  fullName: string;
  email: string;
  company: string;
  industry: string;
  remoteWorkStatus: string;
  yearsRemoteExperience: number;
  preferredWorkHours: string;
  bio: string;
  jobTitle: string;
  country: string;
  city: string;
  timezone: string;
  linkedInVerified: boolean;
  skills: string[];
  interests: string[];
  preferredMeetingFrequency: string;
  preferredWorkingEnvironment: string[];
  meetingPreferences: MeetingPreference;
}

export const initialValues: FormValues = {
  fullName: "",
  email: "",
  company: "",
  industry: "",
  remoteWorkStatus: "",
  yearsRemoteExperience: 0,
  preferredWorkHours: "",
  bio: "",
  jobTitle: "",
  country: "",
  city: "",
  timezone: "",
  linkedInVerified: false,
  skills: [""],
  interests: [""],
  preferredMeetingFrequency: "",
  preferredWorkingEnvironment: [],
  meetingPreferences: {},
};
