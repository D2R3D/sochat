const bcrypt = require('bcryptjs')

const register = async (req, res) =>{
    const db = req.app.get("db");
    const {username, password, profile_pic} = req.body
    const result = await db.find_user([username]);
    const userExists = result[0];
    if (userExists) {
        return res.status(409).send("Username taken")
    }
    const salt = bcrypt.genSaltSync(15);
    const hash = bcrypt.hashSync(password, salt);
    const registerUser = await db.register_user([username, hash, profile_pic])
    const user = registerUser[0];
    req.session.user = {username: user.username, id: user.id};
        return res.status(200).send({message: "welcome", user: req.session.user, loggedIn:true)
}

module.exports = {
    register
}