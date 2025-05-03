import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../src/util/errorHandler';

describe('error handler test', () => {
	let mockRequest: Partial<Request>;
	let mockResponse: Partial<Response>;
	let nextFunction: NextFunction = jest.fn();

    const error = {
        message: "Something went wrong"
    };

	beforeEach(() => {
		mockRequest = {};
		mockResponse = {
			status: jest.fn().mockReturnThis(), // This line
			send: jest.fn(), // also mocking for send function,
            json: jest.fn()
		};
	});

	test('handle error when error includes statusCode', async () => {
		errorHandler(
			error as Error,
			mockRequest as Request,
			mockResponse as Response,
		);

		expect(mockResponse.status).toHaveBeenCalledWith(500);
		expect(mockResponse.json).toHaveBeenCalledWith(error);
		expect(nextFunction).not.toHaveBeenCalled();
	});
});
