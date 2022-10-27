import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Model } from 'sequelize';
import  JsonWebToken  from 'jsonwebtoken';
import { tokenMock, userMock } from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste da rota login', () => {
  before(async () => {
    sinon
      .stub(Model, 'findOne')
      .resolves(userMock as unknown as any);
      sinon.stub(JsonWebToken, 'sign').resolves(tokenMock)
  });

  after(()=> sinon.restore())

  it('Testa se a rota login foi feita com sucesso, retorna um status 200', async () => {
    const ResponseHttp = await chai.request(app).post('/login')
      .send({email: "admin@admin.com", password: "secret_admin"})
    
    expect(ResponseHttp.status).to.be.equal(200);
    expect(ResponseHttp.body).to.be.deep.equal({ token: tokenMock })
  });

  it('testa quando o campo email não é informado', async () => {
    const HttpRespose = await chai.request(app).post('/login')
      .send({password: 'any_password'})

    expect(HttpRespose.status).to.be.equal(400)
    expect(HttpRespose.body).to.be.deep.equal({ message: "All fields must be filled" })
  })

  it('testa quando o campo password não é informado', async () => {
    const HttpRespose = await chai.request(app).post('/login')
      .send({email: "anyemail@email.com"})

    expect(HttpRespose.status).to.be.equal(400)
    expect(HttpRespose.body).to.be.deep.equal({ message: "All fields must be filled" })
  })

  it('testa se quando campo password tem menos de 6 caracteres um erro é informado', async () => {
    const HttpRespose = await chai.request(app).post('/login')
      .send({email: "anyemail@email.com", password: "any"})

    expect(HttpRespose.status).to.be.equal(400)
    expect(HttpRespose.body).to.be.deep.equal({ message: "\"password\" length must be at least 6 characters long" })
  })
  it('testa se quando o campo email não possui um formato válido um erro é informdo', async () => {
    const HttpRespose = await chai.request(app).post('/login')
      .send({email: "anyemail.com", password: "any_password"})

    expect(HttpRespose.status).to.be.equal(400)
    expect(HttpRespose.body).to.be.deep.equal({ message: "\"email\" must be a valid email" })
  })
  describe('testa a rota login/validate', () => {
    before(async () => sinon.stub(JsonWebToken, 'verify').returns(
      { id: 1, username: 'Admin', role: 'admin', email: 'admin@admin.com' } as any
    ));
  
    after(()=> sinon.restore())
    it('testa se é validado um token com sucesso', async () => {
      const response = await chai.request(app).get('/login/validate').send({
        email: "admin@admin.com", password: "secret_admin"
      }).set('Authorization', tokenMock )

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({
        "role": "admin"
      })
    })

    it('testa se quando não é passado um token, um erro é lançado', async () => {
      const response = await chai.request(app).get('/login/validate').send({
        email: "admin@admin.com", password: "secret_admin"
      }).set('Authorization', " " )

      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({
        "message": "token not found"
      })
    })
  })

});