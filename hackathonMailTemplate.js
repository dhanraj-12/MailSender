export const hackathonMailHTML = (teamName, leaderName) => {
    return `
  <!DOCTYPE html>
  <html>
    <body style="font-family: Arial, sans-serif; background-color: #0f0f0f; color: #ffffff; margin: 0; padding: 0;">
      <div style="max-width: 600px; margin: auto; padding: 24px;">
  
        <img 
          src="https://gdgwce-web.s3.ap-south-1.amazonaws.com/images/TechSprint+2k25.png" 
          alt="Hackathon: TechSprint"
          style="width: 100%; border-radius: 10px; margin-bottom: 20px;"
        />
  
        <h2 style="color: #00e676;">Congratulations!</h2>
  
        <p>
          Hello <strong>${leaderName}</strong>,
        </p>
  
        <p>
          We are excited to inform you that your team 
          <strong>${teamName}</strong> has been 
          <strong>successfully shortlisted for Round 3 (offline hackathon)</strong> of
          <strong>Hackathon: TechSprint</strong> organized by 
          <strong>Google Developer Group WCE</strong>.
        </p>
  
        <p>
          After careful evaluation, your team has made it to the
          <strong>final list of participating teams</strong>.
        </p>
  
        <p style="margin-top: 20px;">
          <strong>Please confirm your participation by filling out the form below:</strong>
        </p>
  
        <div style="text-align: center; margin: 24px 0;">
          <a 
            href="https://forms.gle/RpJAWpHLMoDm5mMu5"
            target="_blank"
            style="
              background-color: #00e676;
              color: #000000;
              padding: 14px 28px;
              text-decoration: none;
              font-weight: bold;
              border-radius: 6px;
              display: inline-block;
            "
          >
            CONFIRM PARTICIPATION
          </a>
        </div>

        <p style="text-align: center; margin-top: 10px;">
            <strong>Deadline to fill the form: 8th Jan, 9:00 PM</strong>
        </p>

  
        <p><strong>For any queries, please contact:</strong></p>
        <ul>
          <li>Sumit Phalke: +91 85915 40611</li>
          <li>Alok Kulkarni: +91 93733 90676</li>
        </ul>
  
        <br />
  
        <p>
          Best regards,<br />
          <strong>Team GDG WCE</strong><br />
          Hackathon: TechSprint
        </p>
  
      </div>
    </body>
  </html>
  `;
  };
  