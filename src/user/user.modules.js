const models = require('../models');

class user_module {

    static save_user_details = async (req) => {
        try {
            console.log("req body", req.body)
            const { profileImage } = req.body
            let set_data = req.body
            if (!!profileImage) {
                set_data.profileImage = profileImage
            }
            return await models.users.create(set_data)

        } catch (error) {
            throw error
        }
    }

    static reterive_user = async (req) => {
        try {
            let {limit, pagination} = req.query

            let query = {}
            let projection ={__v: 0}
            let options = {
                lean: true,
                sort: {_id: -1},
                skip: !Number(pagination) ? 0: Number(pagination) * !Number(limit) ? 10: Number(limit),
                limit: !Number(limit) ? 10: Number(limit)
            }
            let users = await models.users.find(query, projection, options)
            let count = await models.users.count(query)
            return {users, count}
        } catch (error) {
            throw error
        }
    }

    static verify_user = async (req) => {
        try {
            console.log("req body", req.body)
            const { otp, user_id } = req.body
            if(otp == '123456'){
                let user = await models.users.findById(user_id)
                return {user: user, status: true, message: 'success'}
            }else{
                return {user: null, status: false, message: 'Otp Invalid'}
            }

        } catch (error) {
            throw error
        }
    }

}

module.exports = user_module