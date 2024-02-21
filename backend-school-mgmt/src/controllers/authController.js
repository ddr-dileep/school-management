import { generateToken } from "../middlewares/authMiddleware.js";
import User from "../models/auth/admin-auth.model.js";
import Owner from "../models/auth/owner-auth.model.js";
import { apiResponse, comparePassword, hashPassword } from "../utils/index.js";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const authController = {
  registerOwner: async (req, res) => {
    try {
      const reqBody = {
        ...req.body,
        password: await hashPassword(req.body?.password),
      };
      const newUser = new Owner(reqBody);
      await newUser.save();
      return apiResponse.success(res, { success: true, user: newUser });
    } catch (error) {
      return apiResponse.validationErrors(res, error);
    }
  },

  loginOwner: async (req, res) => {
    try {
      const { email, phone, password } = req.body;
      let user;
      if (email) {
        user = await Owner.findOne({ email });
      } else {
        user = await Owner.findOne({ phone });
      }
      if (!user) {
        return apiResponse.error(res, {
          errorMessage: "user not found",
        });
      }

      const passwordMatch = await comparePassword(password, user.password);

      if (!passwordMatch) {
        return apiResponse.error(res, {
          errorMessage: "Invalid  credientials",
        });
      }
      const token = generateToken({ userId: user?._id });

      return apiResponse.success(res, { success: true, token });
    } catch (error) {
      return apiResponse.server(res);
    }
  },

  getOwnerInfo: async (req, res) => {
    try {
      const user = await Owner.findById(req?.userInfo?.userId);
      if (!user)
        return apiResponse.error(res, {
          errorMessage: "Account not found or deleted",
        });
      return apiResponse.success(res, { user });
    } catch (error) {
      return apiResponse.server(res);
    }
  },

  updateOwnerInfo: async (req, res) => {
    try {
      const updatedUser = await Owner.findByIdAndUpdate(
        { _id: req?.userInfo?.userId },
        { $set: { ...req.body } },
        { new: true, runValidators: true }
      );

      console.log("updatedUser", updatedUser);

      if (!updatedUser) {
        return apiResponse.error(res, {
          errorMessage: "User unable to update",
        });
      }

      return apiResponse.success(res, {
        message: "User updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      return apiResponse.validationErrors(res, error);
    }
  },

  registerAdmin: async (req, res) => {
    try {
      const reqBody = {
        ...req.body,
        password: await hashPassword(req.body?.password),
      };
      const newUser = new Owner(reqBody);
      await newUser.save();
      return apiResponse.success(res, { success: true, user: newUser });
    } catch (error) {
      return apiResponse.validationErrors(res, error);
    }
  },

  login: async (req, res) => {
    try {
      const { email, uniqueId, password } = req.body;
      const identifier = email || uniqueId;
      let user;

      if (emailRegex.test(identifier)) {
        user = await User.findOne({ email: identifier });
      } else {
        user = await User.findOne({ uniqueId: identifier });
      }
      if (!user) {
        return apiResponse.error(res, {
          errorMessage: "user not found",
        });
      }

      const passwordMatch = await comparePassword(password, user.password);

      if (!passwordMatch) {
        return apiResponse.error(res, {
          errorMessage: "Invalid  credientials",
        });
      }
      const token = generateToken({ userId: user?._id });

      return apiResponse.success(res, { success: true, token });
    } catch (error) {
      return apiResponse.server(res);
    }
  },

  getUserInfo: async (req, res) => {
    try {
      const user = await User.findById(req?.userInfo?.userId);
      if (!user)
        return apiResponse.error(res, {
          errorMessage: "User not found or deleted",
        });
      return apiResponse.success(res, { user });
    } catch (error) {
      return apiResponse.server(res);
    }
  },

  delete: async (req, res) => {
    try {
      const user = await User.findById(req?.userInfo?.userId);
      if (!user)
        return apiResponse.error(res, {
          errorMessage: "User not found or already deleted",
        });
      await User.findByIdAndDelete(req?.userInfo?.userId);
      return apiResponse.success(res, { message: "User deleted successfully" });
    } catch (error) {
      return apiResponse.server(res);
    }
  },

  update: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: req?.userInfo?.userId },
        { $set: { ...req.body } },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        return apiResponse.error(res, {
          errorMessage: "User unable to update",
        });
      }

      return apiResponse.success(res, {
        message: "User updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      return apiResponse.error(res, { errorMessage: error?.message });
    }
  },
};
