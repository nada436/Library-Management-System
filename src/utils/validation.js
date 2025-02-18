export const validateGraphQL = (schema, data) => {
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      throw new Error(error.details.map((err) => err.message));
    }
  };




