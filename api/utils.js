const nodemailer = require('nodemailer')

module.exports.sendMail = async (mailOptions) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'bishalk.tiu@gmail.com',
                pass: 'cinf ddpe yqoa hozh'
            }
        })

        await transporter.sendMail(mailOptions)
    }
    catch (err) {
        console.log(err)
    }
}