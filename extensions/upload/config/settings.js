module.exports = {
  provider: "aws-s3",
  providerOptions: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    region: process.env.AWS_S3_REGION,
    params: {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
    },
  },
};
