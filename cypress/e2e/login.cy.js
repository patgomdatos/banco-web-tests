describe('template spec', () => {
  it('Login com ados validados deve permitir entradas no sistema', () => {
    //Arrage (preparações)
    cy.visit('http://localhost:4000')

    //Act (ações do teste)
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()
    //cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidados deve apresentar mensagem de erro', () => {
    //Arrage (preparações)
    cy.visit('http://localhost:4000')

    //Act (ações do teste)
    cy.get('#username').click().type('julio.lima') 
    cy.get('#senha').click().type('654321')
    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text','Erro no login. Tente novamente.')
  })
})