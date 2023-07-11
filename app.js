const fs = require('fs');
const mongoose = require("mongoose")

const mongoURI = 'mongodb+srv://godwinide:0WDlkTGDtCCltuzs@cluster0.bikzofb.mongodb.net/billions?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app();
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });



const app = async () => {
    const userModel = new mongoose.Schema({
        fullname: String
    });

    const userlist = {};

    const User = mongoose.model("user", userModel);

    const users = (await User.find({}));

    users.forEach(u => userlist[u._doc.email.toLowerCase()] = u._doc.fullname);

    const mappedData = Object.keys(userlist).map(k => ({
        email: k,
        name: userlist[k]
    }))


    const jsonData = JSON.stringify(mappedData, null, 2);

    console.log(mappedData.length)

    fs.writeFile('email_list2.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log('JSON file written successfully.');
        }
    });

}