
const generateRandomNumber = () => {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sendOtp = async(phoneNumber) => {
        const accountSid = 'ACdcc4a65ffb67b73e7317e16e3c2c1a2b';// your accountSid
        const authToken = '71aebfeb4c1191de0c5f508f5312dec1';// your authToken
        const client = require('twilio')(accountSid, authToken);
        const messageBody = generateRandomNumber();
        console.log(messageBody);
        const phoneNumber2 = '+923101140732'// your phone number get from account

        try {
            const message = await client.messages.create({
                body: messageBody,
                from: '+12054309059',// your twilio number
                to: phoneNumber2
            });
            console.log(message.sid);
            return messageBody;
        } catch (error) {
            console.error('Error sending the message:', error);
        }
}

module.exports = {sendOtp}
 