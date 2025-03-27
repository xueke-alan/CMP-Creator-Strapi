module.exports = ({ env }) => ({
  'users-permissions': {
    enabled: true,
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-tencent-cloud-storage",
      providerOptions: {
        CDNDomain: "cos.caihuasujiao.com",
        SecretId: env("COS_SecretId"),
        SecretKey: env("COS_SecretKey"),
        Region: env("COS_Region"),
        Bucket: env("COS_Bucket"),
        ACL: "private", // <= set ACL to private
      },
    },
  },
});