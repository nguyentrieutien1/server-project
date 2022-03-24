const authen = require("../authentication/authenCreateAccount");
const hash = require("../authentication/hashPassword");
const accountsModel = require("../models/accounts.model");
const authenUpdateAccount = require("./../authentication/authenUpdateAccount");
const imagesModel = require("./../models/image");
class Accounts {
  createAccounts = async ({
    fullname,
    email,
    phone,
    username,
    re_password,
    password,
    role,
    avatar,
  }) => {
    try {
      const result = await authen.authenCreateAccounts({
        fullname,
        email,
        phone,
        username,
        re_password,
        password,
        role,
        avatar,
      });
      if (result.error) {
        return result;
      }
      const findAccount = await accountsModel.findOne({ email });
      if (findAccount) {
        return {
          statusCode: 403,
          message: `The account already exists in the system, please re-register`,
        };
      }
      const hashPasswordResult = await hash.hassPassword(password);
      password = hashPasswordResult;
      if (avatar) {
        await accountsModel.create({
          fullname,
          email,
          phone,
          username,
          password,
          role,
          avatar,
        });
      } else {
        await accountsModel.create({
          fullname,
          email,
          phone,
          username,
          password,
          role,
          avatar,
        });
      }
      return {
        statusCode: 200,
        message: `create account successfully !`,
      };
    } catch (error) {
      console.log(error);
    }
  };
  destroyAccount = async (id) => {
    const findAccount = await accountsModel.findOne({ _id: id });
    try {
      if (findAccount) {
        await accountsModel.deleteOne({ _id: id });
        return {
          statusCode: 200,
          message: `delete accounts success <3`,
        };
      } else {
        return {
          statusCode: 403,
          message: `accounts not found !`,
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        message: error,
      };
    }
  };
  updateAccount = async ({
    email,
    password,
    username,
    phone,
    fullname,
    id,
    role,
    re_password,
    avatar,
  }) => {
    try {
      const result = await authen.authenCreateAccounts({
        fullname,
        email,
        phone,
        username,
        re_password,
        password,
        role,
      });
