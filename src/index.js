import fs from 'fs/promises';
const link = './arquivos/texto-web.txt';
import { lerArquivo, quebraParagrafo } from './funcs.js'

const textoPuro = await lerArquivo(link);
console.log(quebraParagrafo(textoPuro));