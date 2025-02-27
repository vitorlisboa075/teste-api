/// <reference types= "cypress"/>


describe('teste de API - login', () => {
  it('deve fazer login', () => {
    cy.request({
      method: 'POST',
      url: 'login',
      body: {
        "email": "vitor@gbi.com.br",
"password": "teste"
      }
    }).then((response) => {
      cy.log(response.body.authorization)
      expect(response.body.message).to.equal('Login realizado com sucesso')
      expect(response.status).to.equal(200)
    })
    

  })
}) 