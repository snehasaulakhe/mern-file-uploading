const { multiDocUpload } = require("../utils/upload")
const multiDocs = require("./../models/Docs")


exports.addDocController = async (req, res) => {
    try {
        multiDocUpload(req, res, async (err) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: "multer error" + err
                })
            }
            if (req.files.dob) {
                req.body.userDob = `dob/${req.files.dob[0].filename}`
            } if (req.files.adhar) {
                req.body.userAdhar = `adhar/${req.files.adhar[0].filename}`
            } if (req.files.tc) {
                req.body.userTc = `tc/${req.files.tc[0].filename}`
            }
            const result = await multiDocs.create(req.body)
            res.json({
                success: true,
                message: "Docs Upload Successfully"
            })
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            message: "error" + error
        })
    }
}


exports.getAllDocController = async (req, res) => {
    try {
        const result = await multiDocs.find()
        res.json({
            success: true,
            message: "Docs Fetched Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}

exports.deleteAllDocss = async (req, res) => {
    try {
        const result = await multiDocs.deleteMany()
        res.json({
            success: true,
            message: "Docs Deleted Successfully",

        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}
