import {Request, Response} from 'express';

export class AppController {

  async getTest(req:Request, res:Response){

    res.status(200).json({
      error:false,
      message:"Success Test with Serverless"
    })

  }

  async getTestWithParams(req:Request, res:Response){

    res.status(200).json({
      error:false,
      message:"Success Test with Serverless with param name: " + req.params.name
    })

  }

}