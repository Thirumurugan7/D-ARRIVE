export const userSchema = {
  name: "Users",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "walletAddress",
      type: "string",
      title: "Wallet Address",
    },
    {
      name: "profileImage",
      type: "image",
      title: "Profile Image",
    },
  ],
};
