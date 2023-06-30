import {Request,Response,NextFunction} from 'express'
import {SmartLogger} from 'node_smart_logger';

const _servLog = new SmartLogger()


export const IncommingLog=(req: Request,res: Response,next: NextFunction) => {
  _servLog.setDebug('[Middleware][>> INCOMMING REQUEST]',{body: req.body,params: req.params,header: req.headers,path: req.path})
  next()
}