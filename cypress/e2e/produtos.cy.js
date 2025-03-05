/// <reference types= "cypress"/>

describe('Teste de API em produtos', () => {
  let token
  let produto1
  produto1 = "Produto teste" + Math.floor(Math.random() * 1000000)
  beforeEach(() => {
    cy.token('vitor@gbi.com.br', 'teste').then(tkn => {
      token = tkn
    })

  })

  it('lista de produstos', () => {
    cy.request({
      method: 'GET',
      url: 'produtos',
    }).should((response) => {
      expect(response.status).equal(200)
      expect(response.body).to.have.property('produtos')
    })
  });

  it('cadastrar produroto', () => {
    cy.request({
      method: 'POST',
      url: 'produtos',
      headers: { authorization: token },
      body: {
        "nome": produto1,
        "preco": 4700,
        "descricao": "celular",
        "quantidade": 3
      }
    })
  });

  //it('teste negativo deve exibir msg produto cadastrado anteriormente', () => {
   //cy.cadastrarProduto(token,'Logitech MX Vertical',470,'Mouse',382)
   // .should((response) => {
    //  expect(response.status).equal(400)
     // expect(response.body.message).equal('Já existe produto com esse nome')

    //})
  //})


});

