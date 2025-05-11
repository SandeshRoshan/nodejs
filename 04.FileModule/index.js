import {readFile,writeFile} from 'fs/promises';

const readFileContent = async(filepath)=>{
    try {
        const data = await readFile(filepath, "utf-8");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// await readFileContent('sample.txt');

//Create File

const createFile = async(filepath,content)=>{
    try {
        const data = await writeFile(filepath, content);
        console.log("file created...");
    } catch (error) {
        console.error(error);
    }
}

// await createFile('sample.py','I Changed the  text of this file');


import {appendFile} from "fs/promises";

const appendtoFile = async (filepath, content) => {
    await appendFile(filepath,content);
    console.log("new file added");

}

// await appendtoFile('sample.txt', ' THis is new data 098765432');

import { mkdir } from 'fs/promises'; 

//Create a directory 
const createDirectory = async (dirName) => {
    await mkdir(dirName);
}

// await createDirectory ('javaa');




const recuringDirectory = async (dirPath) => {
    await mkdir(dirPath,{recursive:true});
}

// await recuringDirectory ('cpp/day1/array');


//Read directory content

import { readdir } from 'fs/promises';

const readDir = async (dirPath) =>{
    const files = await readdir(dirPath);
    console.log(files);
}

await readDir('php')
