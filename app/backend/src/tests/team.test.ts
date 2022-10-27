import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import { Model } from "sequelize";
import { allTeams, teamById } from "./mocks";

chai.use(chaiHttp);

const { expect } = chai;

describe("Teste da rota Teams", () => {
  describe("rota /teams com sucesso", () => {
    before(async () => {
      sinon.stub(Model, "findAll").resolves(allTeams as any);
      sinon.stub(Model, "findOne").resolves(teamById as any);
    });

    after(() => sinon.restore());

    it("testa se é possível filtrar todos os times", async () => {
      const ResponseHttp = await chai.request(app).get("/teams")

      expect(ResponseHttp.status).to.be.equal(200);
      expect(ResponseHttp.body).to.be.deep.equal(allTeams);
    });

    it("testa que é possível filtrar um time pelo Id com sucesso ", async () => {
      const HttpRespose = await chai
        .request(app)
        .get("/teams/1")

      expect(HttpRespose.status).to.be.equal(200);
      expect(HttpRespose.body).to.be.deep.equal(teamById);
    });
  })
  describe('testa a rota /teams/:id quando há um id inexistente', () => {
    before(async () => {
        sinon.stub(Model, "findOne").resolves(null as null);
    });
  
    after(() => sinon.restore());
  
    it("testa  que quando um id inexistente é buscado um erro é lançado", async () => {
        const response = await chai.request(app).get("/teams/99999");
        expect(response.status).to.be.equal(404);
        expect(response.body).to.be.deep.equal({ message: 'There is no team with such id!' });
    });
  })
})
