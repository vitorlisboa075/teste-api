/// <reference types= "cypress"/>

describe('Teste de API em produtos', () => {
    
it('lista de produstos', () => {
  cy.request({
   method: 'GET',
   url: 'produtos',      
   }).should((response)=>{
    expect(response.status).equal(200)
    expect(response.body).to.have.property('produtos')
   })
});

it.only('cadastrar produroto', () => {
    let token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdG9yQGdiaS5jb20uYnIiLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzQwNjE3OTY1LCJleHAiOjE3NDA2MTg1NjV9.5Z6LMKElSXFNSu4SvRuwDsxGpnlDiXJDJEDUkReiJNc'
    cy.request({
        method: 'POST',
        url: 'produtos',
     header: {authorization: token},
        body:{
            "nome": "iphon1e",
            "preco": 4700,
            "descricao": "celular",
            "quantidade": 3
          }

    })
    
});
 
});