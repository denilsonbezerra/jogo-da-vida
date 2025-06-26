# Jogo da Vida - John Conway 🧬

Este projeto implementa o **Jogo da Vida** de Conway, utilizando HTML, CSS e JavaScript. O objetivo foi explorar **simulações visuais com base em lógica de vizinhança e ciclos automáticos**, além de criar uma interface interativa.

## 🔍 Sobre o Jogo

O jogo é uma simulação em grade onde células "vivem" ou "morrem" em cada geração com base em regras fixas.

### 📜 Regras:

1. Células com menos de 2 vizinhos vivos morrem (solidão).
2. Células com 2 ou 3 vizinhos vivem para a próxima geração.
3. Células com mais de 3 vizinhos morrem (superpopulação).
4. Células mortas com exatamente 3 vizinhos vivos tornam-se vivas (nascimento).

## 🛠️ Funcionalidades Implementadas

- Geração de tabuleiro dinâmico com tamanho configurável
- Inicialização de células vivas manualmente
- Botão de iniciar/pausar a simulação automática
- Avanço manual de geração (modo step)
- Botão de limpar/resetar o tabuleiro

## 💻 Tecnologias

- HTML para estrutura da interface
- CSS para estilo do tabuleiro e layout
- JavaScript para lógica do jogo e interação

## 🎮 Como utilizar

1. Defina o número de linhas e colunas do tabuleiro.
2. Marque as células que deseja deixar vivas inicialmente.
3. Clique em **Iniciar** para iniciar a simulação.
4. Use os botões **Pausar**, **Avançar** ou **Limpar** para controlar o jogo.

## 🧠 Aprendizados

- Manipulação de matrizes bidimensionais no JS
- Aplicação de lógica condicional baseada em vizinhos
- Interatividade com eventos e timers (`setInterval`)

📢 Projeto desafiador e excelente para consolidar **algoritmos de vizinhança** e **simulações visuais** com JavaScript.
