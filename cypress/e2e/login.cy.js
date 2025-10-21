describe('template spec', () => {
  beforeEach(() => {
    //Arrage (preparações)
    cy.visit('/')
    cy.screenshot('Apos-visitar-pagina')
  })
  it('Login com dados validados deve permitir entrada no sistema', () => {
    //Act (ações do teste)
    cy.fazerLoginComCredenciaisValidas()
    cy.screenshot('apos-clicar-no-botao-entrar')
    //cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidados deve apresentar mensagem de erro', () => {
    //Act (ações do teste)
    cy.fazerLoginComCredenciaisInvalidas()

    //Assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})