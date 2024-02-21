import { apiResponse } from "../utils/index.js";

export const createSchoolMiddlewares = (req, res, next) => {
  const { name, email, phone, address, uniqueId } = req.body;
  if (!email)
    return apiResponse.error(res, { errorMessage: "School email is required" });
  else if (!phone)
    return apiResponse.error(res, {
      errorMessage: "School phone number is required",
    });
  else if (!name)
    return apiResponse.error(res, { errorMessage: "School name is required" });
  else if (!address)
    return apiResponse.error(res, {
      errorMessage: "School address is required",
    });
  else if (!uniqueId)
    return apiResponse.error(res, {
      errorMessage: "School uniqe id is required",
    });
  return next();
};
