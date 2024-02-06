"use strict";

const AWS = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();

AWS.config.update({ region: "eu-west-1" });
// Create S3 service object
var s3 = new AWS.S3({ apiVersion: "2006-03-01" });

/**
 * upload file to aws s3
 * @param {*} file
 */
async function uploadFileToAws(file, user_id) {
  // const fileName = `${new Date().getTime()}_${file.name}`;
  const fileName = `${new Date().getTime()}_proof_of_funds`;
  const mimetype = file.mimetype;
  const params = {
    Bucket: "cmtbucket/proof_of_funds",
    Key: fileName,
    Body: file.data,
    ContentType: mimetype,
    //ACL: 'public-read'
  };
  const res = await new Promise((resolve, reject) => {
    s3.upload(params, (err, data) =>
      err == null ? resolve(data) : reject(err)
    );
  });
  return { fileUrl: res.Location };
}

async function getFileFromAws(bucket, key) {
  const params = {
    Bucket: bucket,
    Key: key,
  };

  const { Body } = await s3.getObject(params).promise();

  return Body;
}



async function getDownloadFileFromAws(bucket, key) {
  if (!key) {
    return null;
  }

  return new Promise((resolve, reject) => {
    s3.getObject(
      {
        Bucket: bucket,
        Key: key,
      },
      function (err, data) {
        if (err) {
          reject(err);
        }
        if (data) {
          var buffer = Buffer.from(data.Body);
          var base64 = buffer.toString("base64");
          //var file = `data:image/jpeg;base64,${base64}`;

          resolve(base64);
        } else {
          reject("No response from S3");
        }
      }
    );
  });
}

module.exports = {
  getFileFromAws,
  uploadFileToAws,
  getDownloadFileFromAws,
};
