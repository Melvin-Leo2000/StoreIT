const nodemailer = require('nodemailer');


const sendEmail = (to, name, collectiondate, collectiontime, returndate, returntime,smallitems,largeitems,hugeitems,duration,residence, price) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: "storeitnus@gmail.com",
            pass: process.env.MAILING_PW
        }
    })

    const mailOptions = {
        
        from: "storeitnus@gmail.com",
        to: to,
        subject: "StoreIT Order Confirmation",
        html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 10px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: #2a81df; font-size: 25px;">Thanks for Storing IT with us!</h2>
            <p>Hello ${name}, here is a summary and receipt of your storage order:</p>
            <div> 
                <p style="padding-bottom: 10px;">Collection Date: ${collectiondate}</p>
                <p style="padding-bottom: 10px;">Return Date: ${returndate}</p>
                <p style="padding-bottom: 10px;">Collection Time: ${collectiontime}</p>
                <p style="padding-bottom: 10px;">Return Time: ${returntime}</p>
                <p style="padding-bottom: 10px;">No. of Small Items: ${smallitems}</p>
                <p style="padding-bottom: 10px;">No. of Large Items: ${largeitems}</p>
                <p style="padding-bottom: 10px;">No. of Huge Items:  ${hugeitems}</p>
                <p style="padding-bottom: 10px;">Duration of Storage: ${duration} Month</p>
                <p style="padding-bottom: 10px;">Place of Residence: ${residence}</p>
            </div>

            <h1 font-size: 15px;>Total amount to pay: $${price}</h1>
            <p>Do contact us if the above order is wrong so that we can make the necessary changes. Feel free to email us at this email should there be any
            more questions on your end. Thanks for using StoreIT and we hope you have a great day ahead! </p>
            </div>
        `
    }
    

    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err);
            return
        }
        console.log("sent: " + info.response)
    })
}




module.exports = sendEmail