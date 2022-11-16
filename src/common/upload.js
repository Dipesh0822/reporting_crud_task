var multer = require('multer');
var util = require('util');
const { v4: uuid4 } = require('uuid');
const fs = require('fs/promises');
const FormData = require('form-data');
const axios = require('axios');

/**
 * 
 * @desc Create data 
 * 
 */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + './../../public');
    },
    filename: function (req, file, cb) {
        var ext = file.originalname.split('.');
        cb(null, uuid4() + '.' + ext[ext.length - 1]);
    }
});

var uploadF = multer({ storage: storage });

/**
 * 
 * @desc Start Upload Single File
 * 
 */
async function startUploadSingleFile(req, res) {
    let imageurl;
    try {
        const upload = util.promisify(uploadF.fields([{
            name: 'file', maxCount: 1
        }]))
        await upload(req, res);
        imageurl = req.files['file'][0].filename;
        if (!!imageurl) {
            const imagepath = req.files['file'][0].path;
            const fileStream = await fs.readFile(imagepath);
            // Pass file stream directly to form
            const form = new FormData();
            form.append('file', fileStream, req.body.filename);
            form.append('group', req.body.group);
            form.append('subgroup', req.body.subgroup);
            form.append('filename', req.body.filename);
            // Send form data with axios
            const response = await axios.post('https://api.mars.boomio.com/file-service/api/campaign/upload-file', form, {
                headers: {
                    ...form.getHeaders()
                },
            });
            await fs.unlink(imagepath)
            return {
                status: true,
                data: response.data
            };
        } else {
            return {
                status: false,
                msg: "File must be require."
            };
        }
    } catch (e) {
        return {
            status: false,
            msg: "Only image files are allowed!"
        };
    }
}

module.exports = { startUploadSingleFile };
