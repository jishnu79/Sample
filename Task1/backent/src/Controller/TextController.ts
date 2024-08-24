import { NextFunction, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createMsg = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body
    try {
        if (body.content) {
            const text = await prisma.user.create({
                data: {
                    content: body.content
                }
            })
            if (text) {
                res.send({
                    success: true,
                    data: text
                })
            } else {
                res.send({
                    success: false,
                    data: "Somthing went error"
                })
            }
        }
    } catch (error) {
        res.send({
            success: false,
            data: error
        })
    }
}

export const getText = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const texts = await prisma.user.findMany()
        if (texts) {
            res.send({
                success: true,
                data: texts
            })
        } else {
            res.send({
                success: false,
                data: "Somthing went error"
            })
        }
    } catch (error) {
        res.send({
            success: false,
            data: error
        })
    }
}