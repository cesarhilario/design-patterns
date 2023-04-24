# Dictionary (Dicionário)

Um dicionário é usado com pares formados de chave/valor. Podendo-se recuperar um `valor` de um dicionário buscando pela sua `chave`.

## Exemplo

```typescript
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
```

### Inserindo tipos para a chave e valor do Dicionário

```typescript
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
```

## Lembre-se que...

- Dicionários são objetos!

  - Ou seja, você continuará tendo a API de objetos do JavaScript para poder manipular esta estrutura de dados.

    ```typescript
    // Exemplo #1
    console.log(Object.keys(bigFamilyWomanBySpouseDictionary)); // [ 'Bebel', 'Nene', 'Gina' ]

    // Exemplo #2
    delete bigFamilyMenChildrenCount["Tuco"];
    console.log(bigFamilyMenChildrenCount); // { Agostinho: 1, Lineu: 2 }
    ```

## Note também que...

- A tipagem pode ser de qualquer tipo que você desejar, até mesmo um `array`, veja:

  ```typescript
  const familiesFromTheBigFamily: { [familyKey: string]: string[] } = {
    "Família Lineu": ["Lineu", "Nene", "Tuco", "Bebel"],
    "Família Agostinho": ["Agostinho", "Bebel", "Florianinho"],
    "Família Tuco": ["Tuco", "Gina"],
  };

  console.log(familiesFromTheBigFamily["Família Lineu"]); // [ 'Lineu', 'Nene', 'Tuco', 'Bebel' ]
  ```
