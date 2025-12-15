export let name = "Jaime";
export const age: number = 25;
export const isValid: boolean = true;


name = "melisssa";

export const templateString = `Esto es n string multilinea
"test"
inyectar valores
${name}
expresiones ${1 + 1}
numeros ${age}
booleanos ${isValid}
`;

console.log(templateString);
