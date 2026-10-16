import fs from "fs";
import csv from "csv-parser";
import sendMail from "./sendmail.js";
import "dotenv/config";

const results = [];

fs.createReadStream("test.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", async () => {
    for (const row of results) {
      const teamName = row.teamName;     // column 1
      const leaderName = row.leaderName; // column 2
      const email = row.email;           // column 3

      await sendMail(email, teamName, leaderName);
    }

    console.log("✅ All mails sent");
  });
