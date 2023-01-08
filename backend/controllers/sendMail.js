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
            <div style="max-width: 700px; border: 10px solid #ddd; font-size: 110%;">
            <h2 style="padding-top: 30px; padding-bottom: 30px;text-align: center; text-transform: uppercase;color: white; font-size: 25px; background-color: #2a81df">Thanks for Storing IT with us!</h2>
            <h2 style="padding-left: 10%; padding-top: 3%;">Hello ${name},</h2>
            <p style="padding-left: 10%; padding-bottom: 30px; padding-right: 10%;">Thanks for placing an order with StoreIT! This email serves as a confirmation of your order and the details regarding your storage collection and return.</p>
            <p style="padding-left: 10%; padding-bottom: 30px; padding-right: 10%;">Please retain this email receipt for your records, and do a check to see if the details you have keyed in are correct.</p>
            <hr style="width: 70%; height: 3px; background: #2a81df;"></hr>
            <div style="padding-left: 10%; padding-right: 10%; font-weight: bold;"> 
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
            <hr style="width: 70%;height: 3px; background: #2a81df"></hr>
            <h1 style="font-size: 20px;padding-left: 10%;padding-right: 10%;">Total amount to pay: $${price}</h1>
            
            <p style="padding-left: 10%; padding-top: 5px;padding-right: 10%;">Do contact us if the above order is wrong so that we can make the necessary changes on our end. Feel free to reply to this email / contact us through telegram should there be any
            more questions on your end. Thanks for using StoreIT and we hope you have a great day ahead! </p>
            <h3 style="padding-left: 10%; padding-right: 10%; padding-top: 20px; padding-bottom:10px;">Cheers, <br></br> The StoreIT Team</h3>
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