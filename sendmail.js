import transporter from "./mailer.js";
import { hackathonMailHTML } from "./hackathonMailTemplate.js";

const sendMail = async (email, teamName, leaderName) => {
  try {
    await transporter.sendMail({
      from: `"GDG Hackathon" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "TechSprint Hackathon – Round 3 Selection",
      html: hackathonMailHTML(teamName, leaderName),
    });

    console.log(`Mail sent to ${email}`);
  } catch (err) {
    console.error("Mail error:", err);
  }
};

export default sendMail;
