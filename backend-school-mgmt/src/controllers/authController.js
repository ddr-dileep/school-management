import { generateToken } from "../middlewares/authMiddleware.js";
import User from "../models/auth-models.js";
import { apiResponse, comparePassword, hashPassword } from "../utils/index.js";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const authController = {
  register: async (req, res) => {
    try {
      const reqBody = {
        ...req.body,
        password: await hashPassword(req.body?.password),
      };
      const newUser = new User(reqBody);
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

  logout: async (req, res) => {
    try {
      return apiResponse.success(res, { message: "Logout successful" });
    } catch (error) {
      return apiResponse.server(res);
    }
  },
};
