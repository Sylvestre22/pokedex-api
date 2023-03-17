/**
 * Define all your routes
 *
 * @author Mike Christopher SYLVESTRE <mike.sylvestre@lyknowledge.io>
 */

import { Application } from 'express';
import Locals from './Locals';
import Log from '../middlewares/Log';

import apiRouter from './../routes/Api';

class Routes {
    public mountWeb(_express: Application): Application {
        Log.info('Routes :: Mounting React App...');
    }

    public mountApi(_express: Application): Application {
        const apiPrefix = Locals.config().apiPrefix;
        Log.info('Routes :: Mounting API Routes...');

        return _express.use(`/${apiPrefix}`, apiRouter);
    }
}

export default new Routes;