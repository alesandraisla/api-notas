import saveLoggers from "../helpers/saveLog.js";

let logger = (req, res, next) => {
    let logString = `URL - [${req.url}] | METHOD - [${req.method}]`;
    console.log(logString);
    saveLoggers(logString);
    return next();
}

export default logger;