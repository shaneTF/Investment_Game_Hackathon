import { query , mutation} from "./_generated/server";
import {v} from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("Shop").collect();
  },
});

export const updateDocument = mutation({
  args: { 
    id: v.id("Shop"),
    quantity: v.number()
},
 
  handler: async (ctx, args) => {
    const { id } = args;
    console.log(await ctx.db.get(id));
    // { text: "foo", status: { done: true }, _id: ... }

    // Add `tag` and overwrite `status`:
    await ctx.db.patch(id, { quantity: args.quantity });
    console.log(await ctx.db.get(id));

},
});