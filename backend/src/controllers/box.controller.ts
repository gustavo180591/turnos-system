import { Request, Response, NextFunction } from "express";
import { BoxService } from "../services/box.service";

export const getAllBox = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const boxes = await BoxService.getAll();
    res.json(boxes);
  } catch (error) {
    next(error);
  }
};

export const createBox = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const box = await BoxService.create(req.body);
    res.status(201).json(box);
  } catch (error) {
    next(error);
  }
};

export const updateBox = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const box = await BoxService.update(Number(req.params.id), req.body);
    res.json(box);
  } catch (error) {
    next(error);
  }
};

export const deleteBox = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await BoxService.delete(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
