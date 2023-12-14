export const apiResponse = {
  success: (res, data) => {
    const response = { success: true, error: false, data };
    return res.status(200).json(response);
  },

  error: (res, data) => {
    const response = { success: false, error: true, data };
    return res.status(404).json(response);
  },

  server: (res) => {
    return res
      .status(500)
      .json({ success: false, error: true, errorMessage: "Server error" });
  },

  customError: (res, data) => {
    const response = {
      success: false,
      error: true,
      error: data,
    };
    return res.status(404).json(response);
  },

  validationErrors: (res, error) => {
    if (error?.name === "MongoServerError" && error?.code === 11000) {
      const fieldName = Object.keys(error?.keyPattern)[0];
      const duplicateValue = error?.keyValue[fieldName];
      const errorMessage = `${fieldName} '${duplicateValue}' is already in use.`;

      return apiResponse.customError(res, { errorMessage });
    } else if (error?.name === "ValidationError") {
      const validationErrors = Object.values(error?.errors).map(
        (error) => error?.message
      );

      return apiResponse.customError(res, { validationErrors });
    }
    return apiResponse.server(res);
  },
};
