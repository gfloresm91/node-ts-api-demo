import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationChain } from 'express-validator';

const validate = (validations: ValidationChain[]) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    for (const validation of validations) {
      const result = await validation.run(request);
      
      if (result.context.errors.length) {
        break;
      }
    }

    const errors = validationResult(request);

    if (errors.isEmpty()) {
      return next();
    }

    response.status(400).json({ errors: errors.array() });
  };
};

export default validate;