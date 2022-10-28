Este foi o terceiro projeto em TypeScript que realizei na trybe, nele foi desenvolvido uma 
aplicação com informações sobre partidas de futebol, mostrando os times que estão jogando e o placar com as classificações.

Neste projeto todo o BackEnd foi desenvolvido por mim e o Front foi fornecido pelo Trybe, sendo tudo integrado por meio de um docker-compose. 
Para o Banco de dados utilizei a linguagem SQL no banco MySql, com intermedio do ORM Sequelize. Bem como, foi construída uma API Restfull em TypeScript respeitando os princípios da Programação Orientada a Objeto e do Solid em uma arquitetura de Model, Service e Controller. 
Foram utilizadas bibliotecas como o Joi, Express-async-errors, Json Web Token e bcrypt para auxiliar nas rotas criadas e foram realizados testes de integração utilizando o Mocha, Chai, Chai-Http e Sinon.

Para acessar esse projeto clone o repositório e siga os passos abaixo:
 - git clone git@github.com:FernandaGrein/backEnd-Project-TFC-football-club.git
 - cd backEnd-Project-TFC-football-club
 - npm install 
 - npm run compose:up


Neste Projeto foram cumpridos os seguintes requisitos: 
- primeiramente foi feita a criação dos dockerFiles nas pastas de backEnd e FrontEnd de modo que ambos pudessem funcionar de forma integrada com o banco de dados.
- Depois o projeto foi dividido em 4 partes de código: Uma com a rota de Login, outra de Times, uma de Partidas e a última com o Quadro das classificações.
- Além do código foram criados testes de integração para todas as rotas, de modo que 100% das linhas de código fossem testadas.
- As primeiras rotas criadas foram a de login e a de validação do token gerado com o login.
- Na sequencia foi criadas as rotas dos Times, sendo possível buscar todos os times no banco de dados ou apenas um deles.
- Depois foram criadas as rotas dos jogos, nas quais é possível filtrar todas as partidas, ou apenas aquelas em progresso ou finalizadas, bem como, é possível criar uma nova partida em progresso e depois altera-la para adicionar os gols do jogo e finaliza-lo.
- Por fim foram realizadas querys SQL, que integradas com o sequelize apresentam os placares do campeonato, podendo buscar o placar geral, o placar dos times da casa ou dos times visitantes.
