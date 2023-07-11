const nodemailer = require('nodemailer');
const mylist = require("./email_list2.json")

const startList = mylist;


const app = (counter) => {
  // // Create a transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL/TLS
    auth: {
      user: 'clinton@3xwaves.online', // your Zoho Mail email address
      pass: 'nH12B4HMdWpX' // your Zoho Mail password
    }
  });

  const mailOptions = {
    from: 'Clinton@3xwaves.online', // sender's email address
    to: startList[counter].email, // recipient's email address
    subject: `${startList[counter].name}, Your $25000 Waves Coin Airdrop Win Awaits! Act Now!`,
    html: htmlMsg(startList[counter].name)
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Email sent to ${startList[counter], email} successfully:`, info.response);
    }
  })

  if (counter < (startList.length - 1)) {
    app(counter + 1)
  }
}



const htmlMsg = name => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>3X Waves</title>

    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
      p {
        font-size: 1.2em;
      }
    </style>
  </head>
  <body>
    <p>Dear ${name},</p>

    <p>
      We are thrilled to inform you that you have been exclusively selected to
      participate in an exciting opportunity to win up to $25000 worth of Waves
      Coin through our exclusive Airdrops program! Brace yourself for an
      incredible chance to skyrocket your crypto holdings without any effort!
    </p>

    <p>To claim your reward, simply follow three straightforward steps:</p>

    <p>Step 1: Open the Promo Link</p>
    <p>
      Get ready to dive into the world of limitless possibilities! Click on the
      following link:
      <a href="https://3xwaves.online">https://3xwaves.online</a> to unlock your
      entry into the Airdrops promo.
    </p>

    <p>Step 2: Join the Competition</p>
    <p>
      By clicking the link above, you'll land on the promotional page. Once
      there, don't hesitate to click the enticing "Join Competition" button.
      This will guarantee your participation and eligibility for the prize.
    </p>

    <p>Step 3: Follow the Steps on the Webpage</p>
    <p>
      Prepare to be amazed! The webpage will provide you with a series of simple
      steps to follow. By completing them, you'll not only triple your initial
      input but also open the doors to potentially win up to $5000 worth of
      Waves Coin. It's an opportunity you won't want to miss!
    </p>

    <p>
      Act now, ${name}! Time is of the essence, as this exclusive offer won't last
      forever. Take a moment to review the terms and conditions provided on the
      webpage for comprehensive details about the competition.
    </p>

    <p>
      If you have any questions or need assistance along the way, our dedicated
      support team is standing by to provide prompt support. Reach out to us on
      our
      <a href="https://3xwaves.online">website</a>, and we'll ensure a smooth
      experience for you.
    </p>

    <p>
      Congratulations once again on being selected for this unique opportunity.
      Embrace the excitement, embrace the potential rewards, and let your
      journey to crypto success begin!
    </p>

    <p>Best regards,</p>

    <p>
      Clinton Mann <br />
      WAVES <br />
      clinton@3xwaves.online
    </p>
  </body>
</html>`
}



app(0);