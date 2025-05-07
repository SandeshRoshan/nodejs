import path from 'path';

// 1. Join two or more path

const fullPath = path.join('/path','/c','/drive');
// console.log(fullPath);

// 2. Absolute path

// const absolutePath = path.resolve('folder', 'file.txt');
// const absolutePath = path.resolve( 'file.txt');
const absolutePath = path.resolve();
// console.log(absolutePath);


//3. File Directory
const directoryName = path.dirname('c/folder/main.php');
// console.log(directoryName);

//4. Base Path (filename)
const basePath = path.basename('/public/php/index.php');
// console.log(basePath);

//5. Extension name
const extName = path.extname('arijit.mp4');
// console.log(extName);

