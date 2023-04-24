# Singleton

- Garantir que uma classe tenha somente uma instância no programa
  - Isto é um muito comum para programa que acessam recursos compartilhados, como bases de dados, sistemas de arquivo, interface gráficas, spoolers de impressão, módulos de um programa e mais.
- Fornecer um ponto de acesso global para a mesma
  - Isto deixa o Singleton muito parecido com variáveis globais, porque temos um único objeto, com acesso global, sendo usado por várias partes da aplicação.

## Intenção

**Garantir que um classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma**

O Singleton é um padrão de projeto que tem a intenção de resolver dois problemas em uma aplicação

## A Solução

Todas as implementações do Singleton tem dois passos em comum.

1. Fazer o construtor padrão privado, para prevenir que outros objetos usem o operador `new` com a classe singleton
2. Criar um método estático de criação que age como um construtor. Este método chama o construtor privado por debaixo dos panos para criar um objeto e o salva em um campo estático. Todas as chamadas seguintes para este método retornam o objeto em cache.

## Aplicabilidade

- Utilize o padrão Singleton quando uma classe em seu programa deve ter apenas uma instância disponível para todos seus clientes; por exemplo, um objeto de base de dados único compartilhado por diferentes partes do programa.

- Utilize o padrão Singleto quando você precisa de um controle mais estrito sobre as variáveis globais.

## Prós e contras

✅ Você pode ter certeza que uma classe só terá uma única instância.

✅ Você ganha um ponto de acesso global para aquela instância

✅ O objeto singleton é inicializado somente quando for pedido pelo primeira vez

❌ Por resolver dois problemas (Garantir uma única instância e fornecer um ponto de acesso global para esta instância) o padrão Singleton fere o `princípio de responsabilidade única`

❌ O padrão pode mascarar um design ruim, por exemplo, quando os componentes o programa sabem muito sobre cada um

❌ O padrão requer tratamento especial em um ambiente multithreaded para que múltiplas thread não possam criar um objeto singleton várias vezes

❌ Pode ser difícil realizar testes unitários do código cliente do Singleton porque muitos frameworks de teste dependem da herança quando produzem objetos simulados. Já que o construtor da classe singleton é privado e sobrescrever métodos estáticos é impossível na maioria das linguagens. Você terá que pen­sar em uma maneira criativa de si­mu­lar o sin­gle­ton. Ou ape­nas não escreva os tes­tes. Ou não use o padrão Singleton.
