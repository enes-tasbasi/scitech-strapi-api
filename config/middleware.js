module.exports = {
  settings: {
    cors: {
      origin: "*",
    },
  },
  parser: {
    enabled: true,
    multipart: true,
    formidable: {
      maxFileSize: 20000000, // defaults to 200mb
    },
  },
};
