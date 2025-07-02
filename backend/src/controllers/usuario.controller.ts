import { Request, Response, NextFunction } from "express";
import { UsuarioService } from "../services/usuario.service";

export const getAllUsuarios = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuarios = await UsuarioService.getAll();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
};

export const createUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuario = await UsuarioService.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    next(error);
  }
};
    