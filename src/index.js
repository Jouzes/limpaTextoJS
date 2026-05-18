import fs from 'fs/promises';
const link = './arquivos/texto-web.txt';
import { leArquivo, limpaTexto } from './funcs.js';

console.log(limpaTexto(await leArquivo(link)));