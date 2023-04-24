// Exemplo
const bigFamilyMenDictionary: { [key: number]: string } = {
  1: "Agostinho",
  2: "Lineu",
  3: "Tuco",
};

console.log(bigFamilyMenDictionary[2]); // Lineu

const bigFamilyMenChildrenCount: { [key: string]: number } = {
  Agostinho: 1,
  Lineu: 2,
  Tuco: 0,
};

console.log(bigFamilyMenChildrenCount["Agostinho"]); // 1

// Inserindo um tipo para a chave e valor do Dicionário
type BigFamilyWoman = "Nene" | "Bebel" | "Gina";
type BigFamilyMan = "Agostinho" | "Tuco" | "Lineu";

const bigFamilyWomanBySpouseDictionary: {
  [key in BigFamilyWoman]: BigFamilyMan;
} = {
  Bebel: "Agostinho",
  Nene: "Lineu",
  Gina: "Tuco",
};

console.log(bigFamilyWomanBySpouseDictionary.Gina); // Tuco

// Lembre-se que...
console.log(Object.keys(bigFamilyWomanBySpouseDictionary)); // [ 'Bebel', 'Nene', 'Gina' ]

delete bigFamilyMenChildrenCount["Tuco"];
console.log(bigFamilyMenChildrenCount); // { Agostinho: 1, Lineu: 2 }

// Note também que...
const familiesFromTheBigFamily: { [familyKey: string]: string[] } = {
  "Família Lineu": ["Lineu", "Nene", "Tuco", "Bebel"],
  "Família Agostinho": ["Agostinho", "Bebel", "Florianinho"],
  "Família Tuco": ["Tuco", "Gina"],
};

console.log(familiesFromTheBigFamily["Família Lineu"]); // [ 'Lineu', 'Nene', 'Tuco', 'Bebel' ]
