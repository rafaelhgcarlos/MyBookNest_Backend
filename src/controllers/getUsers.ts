import { Request, Response } from "express";
import { db } from "../config/db.js";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.execute("SELECT id, name, email FROM users") as any[];
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
};
