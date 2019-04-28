/** 
 * The Express Route API Wrapper library.
 * @namespace NRoute
 */

let express = require('express')
let app = express();

/** The core route API 
 * 
 * @memberof NRoute
 */
class RouteAPI {
    /**
     * default route request handler.
     * 
     * @param {Express.Request} req - The express.js Request object.
     * @param {Express.Response} res - The express.js Response object.
     */
    home(req, res) {
        res.json('OK!.');
    }
}

let routeAPI = new RouteAPI();

app.get('/', routeAPI.home);