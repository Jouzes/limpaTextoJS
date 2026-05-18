import fs from 'fs/promises';

export async function lerArquivo(caminho) 
{
    try {
    let textos = await fs.readFile(caminho, 'utf-8');
    return textos;
    } catch (erro) {
        console.log(erro);
    }
}

export function quebraParagrafo(texto)
{
    const paragrafos = texto.split('\n').filter(paragrafo => paragrafo !== '');
    return paragrafos;
}