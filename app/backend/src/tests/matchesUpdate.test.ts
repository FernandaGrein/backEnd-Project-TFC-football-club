import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";

import { Model } from "sequelize";
import { createdMatch } from "./mocks";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testa a rota /Matches,atualização de jogos", () => {
  describe("testa a atualização de jogos em progresso na rota /matches com sucesso", () => {
    before(async () => {
      sinon.stub(Model, "update").resolves();
      sinon.stub(Model, "findOne").resolves(createdMatch as any);
    });

    after(() => sinon.restore());

    it("testa se é possível finalizar um jogo com sucesso", async () => {
      const response = await chai.request(app).patch("/matches/3/finish");
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({ message: "Finished" });
    });

    it("testa se é possível atualizar o placar de gols de um jogo com sucesso", async () => {
      const response = await chai
        .request(app)
        .patch("/matches/3")
        .send({ homeTeamGoals: 3, awayTeamGoals: 1 });

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({ message: "Updated" });
    });
  });

  describe("testa que não é possível atualizar um jogo inexistente", () => {
    before(async () => {
      sinon.stub(Model, "update").resolves();
      sinon.stub(Model, "findOne").resolves(null as null);
    });

    after(() => sinon.restore());
    it("testa  que não é possível finalizar um jogo inexistente", async () => {
      const response = await chai.request(app).patch("/matches/99999/finish");
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: "Match not found" });
    });

    it("testa que não é possível atualizar o placar de gols de um jogo inexistente", async () => {
      const response = await chai
        .request(app)
        .patch("/matches/9999")
        .send({ homeTeamGoals: 3, awayTeamGoals: 1 });

      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: "Match not found" });
    });
  });
});
