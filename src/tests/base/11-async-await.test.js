import { getImagen } from "../../base/11-async-await"

describe('pruebas con async-await-fetch', () => { 
    test('debe retornar la url', async() => { 
        const url = await getImagen();
        console.log(url)
        expect(typeof url).toBe('string');

     })
 })