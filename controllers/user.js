require('dotenv').config()
const axios = require('axios');
const { config } = require('dotenv');
const { stringify } = require('querystring')

const attemptLogin = async (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;
    // const uname = username;

    const { username, uname, password } = req.body

    console.log(process.env.LOGIN_URL);

    const dataToSend = {
        uname_static: username,
        username: username,
        uname: uname,
        password: password,
        rememberusername: 1

    }

    const formData = stringify(dataToSend)
    console.log(formData);

    const configuration = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',  // Include the appropriate User-Agent
            'Accept-Encoding': 'gzip, deflate, br',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Host':'mydy.dypatil.edu'
        },
    }

    const Page = await axios.post(process.env.LOGIN_URL, formData, configuration);

    // console.log("RESULTING PAGE: ", Page.data)
    res.send({ rawHTML: Page.data })

}


module.exports = { attemptLogin }