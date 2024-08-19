import axios from "axios";

interface GeolocationResponse {
  country_code: string;
  timezone: string;
}

export async function getUserLocation(): Promise<GeolocationResponse> {
  try {
    const response = await axios.get("https://ipapi.co/json/");
    return {
      country_code: response.data.country_code,
      timezone: response.data.timezone,
    };
  } catch (error) {
    console.error("Error fetching user location:", error);
    return {
      country_code: "",
      timezone: "",
    };
  }
}
