import { Response } from 'express';

type JsonResponse = Record<string, unknown> | unknown[] | null;

export function ok<T extends JsonResponse>(res: Response, data: T): void {
  res.status(200).json(data);
}

export function created<T extends JsonResponse>(res: Response, data: T): void {
  res.status(201).json(data);
}

export function error(
  res: Response, 
  msg: string, 
  code: number = 400,
  details?: Record<string, unknown>
): void {
  const errorResponse: { error: string; details?: Record<string, unknown> } = { error: msg };
  if (details) {
    errorResponse.details = details;
  }
  res.status(code).json(errorResponse);
}

export function notFound(res: Response, message: string = 'Resource not found'): void {
  error(res, message, 404);
}

export function unauthorized(res: Response, message: string = 'Unauthorized'): void {
  error(res, message, 401);
}

export function forbidden(res: Response, message: string = 'Forbidden'): void {
  error(res, message, 403);
}