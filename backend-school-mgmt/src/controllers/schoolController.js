import { validObjectId } from "../middlewares/authMiddleware.js";
import Owner from "../models/auth/owner-auth.model.js";
import School from "../models/school/school.model.js";
import { apiResponse } from "../utils/apiResponse.js";

export const schoolController = {
  createSchool: async (req, res) => {
    try {
      const owner = await Owner.findById(req?.userInfo?.userId);
      if (!owner)
        return apiResponse.error(res, {
          errorMessage: "Account not found or deleted",
        });

      const reqBody = {
        ...req.body,
        owner: owner?._id,
      };

      const newSchool = new School(reqBody);
      await newSchool.save();

      owner.schools.push(newSchool._id);
      await owner.save();
      return apiResponse.success(res, {
        successMessage: "School created successfully",
        school: newSchool,
      });
    } catch (error) {
      console.log(error);
      return apiResponse.validationErrors(res, error);
    }
  },

  getSchools: async (req, res) => {
    try {
      const owner = await Owner.findById(req?.userInfo?.userId);
      if (!owner)
        return apiResponse.error(res, {
          errorMessage: "Account not found or deleted",
        });

      const schools = await School.find({ owner: owner?._id });
      return apiResponse.success(res, {
        successMessage: "Schools fetched successfully",
        totol: schools.length || 0,
        schools,
      });
    } catch (error) {
      return apiResponse.error(res, { errorMessage: error?.message });
    }
  },

  getOneSchool: async (req, res) => {
    try {
      const id = validObjectId(req.params.id);
      if (!id)
        return apiResponse.error(res, { errorMessage: "Invalid id provided" });

      const school = await School.findById(req.params?.id);
      if (!school)
        return apiResponse.error(res, {
          errorMessage: "School not found or deleted",
        });

      return apiResponse.success(res, {
        successMessage: "School fetched successfully",
        school,
      });
    } catch (error) {
      console.log(error);
      return apiResponse.error(res, { errorMessage: error?.message });
    }
  },

  updateSchool: async (req, res) => {
    try {
      const schoolId = req.params.id;
      const { userId } = req?.userInfo;
      const owner = await Owner.findById(userId);
      if (!owner)
        return apiResponse.error(res, {
          errorMessage: "Account not found or deleted",
        });

      const school = await School.findById(schoolId);
      if (!school) {
        return apiResponse.error(res, {
          errorMessage: "School not found",
        });
      }
      // Ensure the user is the owner of the school
      if (String(school.owner) !== String(userId)) {
        return apiResponse.error(res, {
          errorMessage: "Unauthorized to update this school",
        });
      }

      Object.assign(school, req.body); // Merge req.body into school
      await school.save();

      return apiResponse.success(res, {
        successMessage: "School updated successfully",
        school,
      });
    } catch (error) {
      console.log(error);
      return apiResponse.error(res, { errorMessage: error?.message });
    }
  },
};
