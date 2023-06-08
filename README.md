# Jogo da Vida

O Jogo da Vida é um programa que simula uma população de células seguindo regras simples de interação. O projeto foi implementado utilizando HTML, CSS e JavaScript.

## Funcionalidades

O Jogo da Vida possui as seguintes funcionalidades:

- Configuração do tamanho do tabuleiro
- Inicialização e pausa da simulação
- Avanço manual para a próxima geração
- Limpeza do tabuleiro

## Regras

- Qualquer espaço vazio com exatamente três vizinhos vivos se torna uma célula viva.
- Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
- Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
- Qualquer célula viva com dois ou três vizinhos vivos continua viva para a próxima geração.

## Como jogar

1. Acesse o link do site clicando [aqui](https://denilsonbezerra.github.io/jogo-da-vida/).
2. Você pode configurar o tamanho do tabuleiro, ajustando o número de linhas e colunas nos respectivos campos.
3. Selecione no tabuleiro os espaços que deseja colocar célular vivas inicialmente.
4. Clique em "Iniciar" para iniciar a simulação automática do jogo. Cada célula evoluirá de acordo com as regras estabelecidas.
5. Clique em "Pausar" caso queira interferir na evolução das gerações e adicionar mais célular.
- Para avançar manualmente para a próxima geração, clique em "Avançar" (só funciona enquanto o jogo estiver parado).
- Para limpar o tabuleiro e reiniciar o jogo, clique em "Limpar".

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais informações.

## Créditos

O Jogo da Vida foi desenvolvido com base no conceito original proposto por John Conway em 1970.
