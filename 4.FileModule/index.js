import {readFile} from 'fs/promises';

const readFileContent = async(filepath)=>{
    try {
        const data = await readFile(filepath, "utf-8");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

await readFileContent('sample.txt');
