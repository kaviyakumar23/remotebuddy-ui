import { query } from "../_generated/server";

export const getCountries = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("countries").collect();
  },
});

export const getTimezones = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("timezones").collect();
  },
});
