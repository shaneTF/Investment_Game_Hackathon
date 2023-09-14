import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Shop: defineTable({
    id: v.number(),
    name: v.string(),
    quantity: v.number(),
    sell_price: v.number(),
    cur_price: v.number(),

  }),
});