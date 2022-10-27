import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import { Model } from 'sequelize';
import { allGames, endedGames, gamesInProgress } from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota /Matche', () => {
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
 
});
