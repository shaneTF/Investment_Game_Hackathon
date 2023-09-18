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
    id: v.id("Players"),
    quantity: v.array(v.number()),
},
 
  handler: async (ctx, args) => {
    const { id } = args;
  
    // { text: "foo", status: { done: true }, _id: ... }

    // Add `tag` and overwrite `status`:
    await ctx.db.patch(id, { shopQuantity: args.quantity });
    console.log(await ctx.db.get(id));

},
});

export const getPlayerInfo = query({
  args: {userName: v.string()},
  handler: async (ctx, args) => {
    const myUser = await ctx.db.query("Players").filter( (q: any) => q.eq(q.field("userName") , "Potatoe" )).collect();
    return myUser;
  },
});

