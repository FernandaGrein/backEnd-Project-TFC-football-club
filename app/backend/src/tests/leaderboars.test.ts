import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import sequelize from "../database/models";
import { mockAwayBoard, mockgeneralBoard, mockHomeBoard } from "./mocks";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testa da rota /leaderboard", () => {
  describe("testa se é possível buscar os quadros de pontos com sucesso", () => {
    before(async () => {
      sinon
        .stub(sequelize, "query")
        .onFirstCall()
        .resolves([mockHomeBoard] as any)
        .onSecondCall()
        .resolves([mockAwayBoard] as any)
        .onThirdCall()
        .resolves([mockgeneralBoard] as any);
    });

    after(() => sinon.restore());

    it("testa se é buscar o placar dos times da casa com sucesso", async () => {
      const response = await chai.request(app).get("/leaderboard/home");
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockHomeBoard);
    });

    it("testa se é buscar o placar dos times de fora com sucesso", async () => {
      const response = await chai.request(app).get("/leaderboard/away");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockAwayBoard);
    });

    it("testa se é buscar o placar geral de todos os times com sucesso", async () => {
      const response = await chai.request(app).get("/leaderboard");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockgeneralBoard);
    });
  });
});
