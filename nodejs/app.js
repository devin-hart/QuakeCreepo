const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
const path = require('path');

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const quakeLogPath = path.resolve('D:\\Steam\\steamapps\\common\\Quake\\qconsole.log');
const quakeReadLog = fs.createReadStream(quakeLogPath, 'utf8');
const quakeWriteLog = fs.createWriteStream(__dirname + '/write.txt');

console.log(quakeLogPath);

quakeReadLog.on('data', function (quakeLog) {
  console.log("Writing to write.txt file ...");
  quakeWriteLog.write(quakeLog);
  console.log(quakeLog);

  let monsterCounter = {
    "rotfish": 0,
    "rottweiler": 0,
    "grunt": 0,
    "zombie": 0,
    "knight": 0,
    "enforcer": 0,
    "scrag": 0,
    "spawn": 0,
    "ogre": 0,
    "deathknight": 0,
    "fiend": 0,
    "vore": 0,
    "shambler": 0,
    "chthon": 0,
    "shubniggurath": 0
  };

  quakeLog.split('\n').forEach(function (line) {

    switch (line) {
      case 'Rotfish dies\r':
        monsterCounter.rotfish++;
        break;
      case 'Rottweiler dies\r':
        monsterCounter.rottweiler++;
        break;
      case 'Grunt dies\r':
        monsterCounter.grunt++;
        break;
      case 'Zombie dies\r':
        monsterCounter.zombie++;
        break;
      case 'Knight dies\r':
        monsterCounter.knight++;
        break;
      case 'Enforcer dies\r':
        monsterCounter.enforcer++;
        break;
      case 'Scrag dies\r':
        monsterCounter.scrag++;
        break;
      case 'Spawn dies\r':
        monsterCounter.spawn++;
        break;
      case 'Ogre dies\r':
        monsterCounter.ogre++;
        break;
      case 'Death Knight dies\r':
        monsterCounter.deathknight++;
        break;
      case 'Fiend dies\r':
        monsterCounter.fiend++;
        break;
      case 'Vore dies\r':
        monsterCounter.vore++;
        break;
      case 'Shambler dies\r':
        monsterCounter.shambler++;
        break;
      case 'Chthon dies\r':
        monsterCounter.chthon++;
        break;
      case 'Shub-Niggurath dies\r':
        monsterCounter.shubniggurath++;
        break;
      case 'Exited level\r':
        console.log(monsterCounter);
        monsterCounter.rotfish = 0;
        monsterCounter.rottweiler = 0;
        monsterCounter.grunt = 0;
        monsterCounter.zombie = 0;
        monsterCounter.knight = 0;
        monsterCounter.enforcer = 0;
        monsterCounter.scrag = 0;
        monsterCounter.spawn = 0;
        monsterCounter.ogre = 0;
        monsterCounter.deathknight = 0;
        monsterCounter.fiend = 0;
        monsterCounter.vore = 0;
        monsterCounter.shambler = 0;
        monsterCounter.chthon = 0;
        monsterCounter.shugniggurath = 0;
      default:
    }
  });

  // console.log(monsterCounter);
});


//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});