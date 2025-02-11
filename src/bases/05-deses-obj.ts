
interface Heros {
    nomen: string;
    aetas: number;
    codeNomen: string;
    facultatem?: string;
}


export const persona: Heros = {
    nomen: 'Tony',
    aetas: 45,
    codeNomen: 'Isonman',
}

console.log(persona.nomen);

const { nomen, aetas, facultatem = 'No tiene poder' } = persona;

console.log( aetas, facultatem );