/**
 * Defines the view engines
 *
 * @author Mike Christopher SYLVESTRE <mike.sylvestre@lyknowledge.io>
 */

import * as path from 'path';
import { Application } from 'express';

import Log from './Log';

class Views {
    public static mount(_express: Application): Application {
        Log.info('Launching the React code ...');

        return _express;
    }
}

export default Views;