import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import user from '../database/models/user';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste da rota login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  it('Testa se a rota login foi feita com sucesso, retorna um status 200', async () => {
    const ResponseHttp = await chai.request(app).post('/login')
      .send({email: "anyemail@email.com", password: "any_password"})

    expect(ResponseHttp.status).to.be.equal(200);
    expect(ResponseHttp.body).to.be.deep.equal({token: "OK"})
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
      .send({email: "anyemail@email.com", password: "any_p"})

    expect(HttpRespose.status).to.be.equal(400)
    expect(HttpRespose.body).to.be.deep.equal({ message: "\"name\" length must be at least 3 characters long" })
  })
  it('testa se quando o campo email não possui um formato válido um erro é informdo', async () => {
    const HttpRespose = await chai.request(app).post('/login')
      .send({email: "anyemail.com", password: "any_password"})

    expect(HttpRespose.status).to.be.equal(400)
    expect(HttpRespose.body).to.be.deep.equal({ message: "EMAIL ERRADO" })
  })

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});