import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import { Model } from 'sequelize';
import  JsonWebToken  from 'jsonwebtoken';
import { allGames, createdMatch, endedGames, gamesInProgress, token } from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota /Matches, busca e criação de jogos', () => {
  describe ('testa a rota /matches findAll', () => {
    before(async () => {
      sinon
        .stub(Model, "findAll")
        .resolves(allGames as any);
    });

    after(()=> sinon.restore())

    it('testa se ao passar a rota /matches sem parâmetros é retornado um array com todos os jogos', async () => {
      const HttpResponse = await chai.request(app).get('/matches')

      expect(HttpResponse.status).to.be.equal(200);
      expect(HttpResponse.body).to.be.deep.equal(allGames)
    });
  })

  describe ('testa a rota /matches jogos em andamento findAll', () => {
    before(async () => {
      sinon
        .stub(Model, "findAll")
        .resolves(gamesInProgress as any);
    });

    after(()=> sinon.restore())

    it('testa se ao passar a rota /matches sem parâmetros é retornado um array com todos os jogos', async () => {
      const HttpResponse = await chai.request(app).get('/matches?inProgress=true')

      expect(HttpResponse.status).to.be.equal(200);
      expect(HttpResponse.body).to.be.deep.equal(gamesInProgress)
    });
  })

  describe ('testa a rota /matches jogos finalizados', () => {
    before(async () => {
      sinon
        .stub(Model, "findAll")
        .resolves(endedGames as any);
    });

    after(()=> sinon.restore())

    it('testa se ao passar a rota /matches sem parâmetros é retornado um array com todos os jogos', async () => {
      const HttpResponse = await chai.request(app).get('/matches?inProgress=false')

      expect(HttpResponse.status).to.be.equal(200);
      expect(HttpResponse.body).to.be.deep.equal(endedGames)
    });
  })

  describe('testa a criação de jogos em progresso na rota /matches', () => {
    before(async () => {
      sinon
        .stub(Model, "create")
        .resolves(createdMatch as any);
      sinon.stub(JsonWebToken, 'verify').returns(
         { id: 1, username: 'Admin', role: 'admin', email: 'admin@admin.com' } as any
      )
    });
  
    after(()=> sinon.restore())

    it('testa se é possível criar um jogo com sucesso', async () => {
      const response = await chai.request(app).post('/matches').send({
        homeTeam: 16, awayTeam: 8,  homeTeamGoals: 2, awayTeamGoals: 2, 
      }).set('Authorization', token )
      
      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.deep.equal(createdMatch)
    })

    it('testa se a ausência de um token retorna um erro', async () => {
      const response = await chai.request(app).post('/matches').send({
        homeTeam: 16, awayTeam: 8,  homeTeamGoals: 2, awayTeamGoals: 2, 
      }).set('Authorization', "" )
        
      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({"message": "Token not Found"})
    })

    it('testa não é possível criar um jogo com o mesmo time como homeTeam eawayTeam', async () => {
      const response = await chai.request(app).post('/matches').send({
        homeTeam: 8, awayTeam: 8,  homeTeamGoals: 2, awayTeamGoals: 2, 
      }).set('Authorization', token )
        
      expect(response.status).to.be.equal(422);
      expect(response.body).to.be.deep.equal({
        message: 'It is not possible to create a match with two equal teams'
      })
    })
    
    it('testa não é possível criar um jogo com um id inexistente', async () => {
      const response = await chai.request(app).post('/matches').send({
        homeTeam: 999999, awayTeam: 8,  homeTeamGoals: 2, awayTeamGoals: 2, 
      }).set('Authorization', token )
          
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({
        message: 'There is no team with such id!'
      })
    })
  })
});
