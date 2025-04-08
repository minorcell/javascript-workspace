const qiniu = require("qiniu");

const bucket = "cp-server";
const accessKey = "REPLACEYOURACCESSKEY";
const secretKey = "REPLACEYOURSECRETKEY";
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

const options = {
    scope: bucket,
    expires: 7200,
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

// 上传"./assets/01.jpg"文件

const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z0;

const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();

formUploader.putFile(uploadToken, null, './assets/01.jpg', putExtra, function (respErr, respBody, respInfo) {
    if (respErr) {
        throw respErr;
    }
    if (respInfo.statusCode == 200) {
        console.log(respBody);
        // 如果成功，这里内容便是 图片信息
    } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
    }
});

// 访问地址：http://sudn75g3f.hd-bkt.clouddn.com/Fkx8G2Fc6Jkn8YILSnqHuoXitn9r