//For rate limiting users to create transactions
import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], //Track user based on Clerk userId
  rules: [
    //used for rate limiting
    tokenBucket({
      mode: "LIVE",
      refillRate: 2,
      //every hour user can make 10 request
      interval: 3600,
      capacity: 2,
    }),
  ],
});

export default aj;
