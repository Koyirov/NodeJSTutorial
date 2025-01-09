import fs from 'fs/promises';

let filePath = "./logs/requestLogs.json"

function readFile(){
    return fs.readFile(filePath)
}

function writeFile(DATA){
    try {
        fs.writeFile(filePath, DATA, { encoding: "utf8"}).then(() => {
                return true;
        });
    }catch(err){
        console.log("Es ist ein fehler aufgetreten: " + err);
        return false
    }
}

export function requestLogger(req, res, next){

    const LOGS = () => {
        readFile().then((resOfReadFile) => {
            try{
                let fileData = JSON.parse(resOfReadFile.toString());
                let logObjects = [fileData.logs[0]];

                let newLog = { datum: new Date, url: req.originalUrl };
                logObjects.push(newLog);

                return logObjects;
            }catch(err){
                console.log("Es ist ein fehler aufgetreten: " + err);
            }
        }).then((resOfReadFile) => {
            try{

                let newData = {
                    log: [resOfReadFile]
                };

                writeFile(JSON.stringify(newData));
            }catch(err){
                console.log("Es ist ein fehler aufgetreten: " + err);
            }
        });
    };
    LOGS();
    next();
}