describe('template spec', () => {
  beforeEach(() => {
    //Arrage (preparações)
    cy.visit('http://localhost:4000')
    cy.screenshot('Apos-visitar-pagina')
  })
  it.only('Login com ados validados deve permitir entradas no sistema', () => {
    //Act (ações do teste)
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('apos-preencher-com-datos-validos')
    cy.get('#login-section > .btn').click()
    cy.screenshot('apos-clicar-no-botao-entrar')
    //cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidados deve apresentar mensagem de erro', () => {
    //Act (ações do teste)
    cy.get('#username').click().type('julio.lima') 
    cy.get('#senha').click().type('654321')
    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text','Erro no login. Tente novamente.')
  })
})