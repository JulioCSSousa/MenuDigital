import * as yup from 'yup';
import { Request, Response } from 'express';
import {  } from 'typeorm';
import { AppDataSource } from '../../database/data-source';
import { Tenant } from '../../entity/Tenant';
import { StatusCodes } from 'http-status-codes';

export async function checkRegisterExists(req: Request, res: Response, next) {
    const tenantRepository = AppDataSource.getRepository(Tenant);
        const tenant = await tenantRepository.findOne({
             where: { registerId: req.body.registerId }
            });
            console.log(tenant)
        if (tenant) return res.status(StatusCodes.CONFLICT).json("register alread exists");
        else{
            next()
        }

}

