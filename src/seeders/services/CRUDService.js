import db from '../../models';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordfromBcrypt = await hashUserPassword(data.password);
            await db.Users.create({
                email: data.email,
                password: hashPasswordfromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender == '1' ? true : false,
                roleId: data.roleId,


            })
            resolve('ok create new user succeed')
        }
        catch (e) {
            reject(e);
        }

    })

}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {

        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }
        catch (e) {
            reject(e);
        }
        var hash = bcrypt.hashSync("B4c0/\/", salt);

    })
}

module.exports = {
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword
}