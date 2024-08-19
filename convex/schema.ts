import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    name: v.string(),
    email: v.string(),
    jobTitle: v.string(),
    bio: v.string(),
    company: v.optional(v.string()),
    industry: v.string(),
    yearsOfExperience: v.number(),
    remoteWorkStatus: v.string(),
    remoteWorkExperience: v.number(),
    timezone: v.string(),
    country: v.string(),
    city: v.optional(v.string()),
    linkedInUrl: v.optional(v.string()),
    linkedInVerified: v.boolean(),
    preferredWorkHours: v.string(),
    profileVisibility: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"])
    .index("by_industry", ["industry"]),
  userSkills: defineTable({
    userId: v.id("users"),
    skillId: v.id("skills"),
    proficiencyLevel: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_skillId", ["skillId"]),
  userInterests: defineTable({
    userId: v.id("users"),
    interestId: v.id("interests"),
  })
    .index("by_userId", ["userId"])
    .index("by_interestId", ["interestId"]),
  userLanguages: defineTable({
    userId: v.id("users"),
    languageId: v.id("languages"),
    proficiencyLevel: v.string(),
  })
    .index("by_userId", ["userId"])
    .index("by_languageId", ["languageId"]),
  userPreferences: defineTable({
    userId: v.id("users"),
    preferredCommunicationTools: v.array(v.string()),
    networkingPreferences: v.array(v.string()),
    learningStyle: v.string(),
    meetingFrequency: v.string(),
    workEnvironment: v.string(),
  }).index("by_userId", ["userId"]),
  countries: defineTable({
    name: v.string(),
    code: v.string(),
  }).index("by_code", ["code"]),
  timezones: defineTable({
    name: v.string(),
    offset: v.string(),
  }).index("by_offset", ["offset"]),
  skills: defineTable({
    name: v.string(),
    category: v.string(),
  })
    .index("by_name", ["name"])
    .index("by_category", ["category"]),
  interests: defineTable({
    name: v.string(),
    category: v.string(),
  })
    .index("by_name", ["name"])
    .index("by_category", ["category"]),
  languages: defineTable({
    name: v.string(),
    code: v.string(),
  }).index("by_code", ["code"]),
  industries: defineTable({
    name: v.string(),
  }).index("by_name", ["name"]),
  connections: defineTable({
    userId1: v.id("users"),
    userId2: v.id("users"),
    status: v.string(), // e.g., "pending", "accepted", "rejected", "completed"
    initiatedBy: v.id("users"),
    weekStartDate: v.number(), // Unix timestamp of the start of the week for this connection
    scheduledTime: v.optional(v.number()), // Unix timestamp of the scheduled meeting time
    starterMessages: v.array(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_userId1", ["userId1"])
    .index("by_userId2", ["userId2"])
    .index("by_status", ["status"])
    .index("by_weekStartDate", ["weekStartDate"]),
  userFlags: defineTable({
    reporterId: v.id("users"),
    reportedUserId: v.id("users"),
    reason: v.string(),
    description: v.optional(v.string()),
    status: v.string(), // e.g., "pending", "reviewed", "resolved"
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_reportedUserId", ["reportedUserId"])
    .index("by_status", ["status"]),
  userFeedback: defineTable({
    giverId: v.id("users"),
    receiverId: v.id("users"),
    connectionId: v.id("connections"),
    rating: v.number(),
    comments: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_connectionId", ["connectionId"])
    .index("by_receiverId", ["receiverId"]),
  userAvailability: defineTable({
    userId: v.id("users"),
    weekStartDate: v.number(), // Unix timestamp of the start of the week
    availableSlots: v.array(
      v.object({
        dayOfWeek: v.number(), // 0-6 for Sunday-Saturday
        startTime: v.string(), // HH:MM format
        endTime: v.string(), // HH:MM format
      })
    ),
    lastUpdated: v.number(),
  }).index("by_userId_weekStartDate", ["userId", "weekStartDate"]),
});
