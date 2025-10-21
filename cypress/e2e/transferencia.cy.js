describe('Transferencias', () => {
    beforeEach(() => {
    cy.visit('/')
    cy.fazerLoginComCredenciaisValidas()

    })
    it('Deve transferir quando informo dados e valor valido', () => {
       
        //Act
        cy.realizarTransferencia('Joao da Silva', 'Maria Oliveira', '11')

        //Assertion
        cy.verificarMensagemNoToast('Transferência realizada!')
   }) 

   it('Deve apresentar erro quando tentar transferir mais de 5 mil sem o token', () => {
        
        //Act
        cy.realizarTransferencia('Joao da Silva', 'Maria Oliveira', '5000.01')

        //Assertion
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
   }) 

})