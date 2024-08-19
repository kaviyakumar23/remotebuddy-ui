import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { countries } from "../constants/countries";
import { timezones } from "../constants/timezones";

export const populateCountries = mutation({
  args: {},
  handler: async (ctx) => {
    for (const country of countries) {
      const existing = await ctx.db
        .query("countries")
        .withIndex("by_code", (q) => q.eq("code", country.code))
        .unique();

      if (!existing) {
        await ctx.db.insert("countries", country);
      }
    }
    return "Countries population completed.";
  },
});

export const populateTimezones = mutation({
  args: {},
  handler: async (ctx) => {
    for (const timezone of timezones) {
      const existing = await ctx.db
        .query("timezones")
        .withIndex("by_offset", (q) => q.eq("offset", timezone.offset))
        .unique();

      if (!existing) {
        await ctx.db.insert("timezones", timezone);
      }
    }
    return "Timezones population completed.";
  },
});
