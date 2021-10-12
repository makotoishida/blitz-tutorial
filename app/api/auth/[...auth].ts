import { passportAuth } from "blitz"
import db from "db"

const GoogleStrategy = require("passport-google-oauth20").Strategy

export default passportAuth({
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  strategies: [
    {
      strategy: new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: `${process.env.APP_URL}/api/auth/google/callback`,
          scope: ["email"],
          // scope: ["email", "profile"],
        },
        async function (accessToken, refreshToken, profile, cb) {
          const googleId = profile.id as string
          const email = (profile.emails && profile.emails[0]?.value) as string

          const user = await db.user.upsert({
            where: { email },
            create: {
              email,
              name: email,
            },
            update: { email },
          })
          const publicData = {
            userId: user.id,
            roles: [user.role],
            source: "google",
          }
          cb(null, { publicData })
        }
      ),
    },
  ],
})
