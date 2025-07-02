import { Request, Response, NextFunction } from "express";
import { ProductorService } from "../services/productor.service";

export const getAllProductores = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const productores = await ProductorService.getAll();
    res.json(productores);
  } catch (error) {
    next(error);
  }
};

export const createProductor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const productor = await ProductorService.create(req.body);
    res.status(201).json(productor);
  } catch (error) {
    next(error);
  }
};

export const updateProductor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const productor = await ProductorService.update(Number(req.params.id), req.body);
    res.json(productor);
  } catch (error) {
    next(error);
  }
};

export const callProductor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { tipo } = req.body as { tipo: 'REGISTRO_APP' | 'REGISTRO_INMUEBLE' };
    const productor = await ProductorService.call(Number(req.params.id), tipo);
    res.json(productor);
  } catch (error) {
    next(error);
  }
};

export const finishProductor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const productor = await ProductorService.finish(Number(req.params.id));
    res.json(productor);
  } catch (error) {
    next(error);
  }
};
