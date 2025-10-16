describe('template spec', () => {
  beforeEach(() => {
    //Arrage (preparações)
    cy.visit('http://localhost:4000')
    cy.screenshot('Apos-visitar-pagina')
  })
  it('Login com ados validados deve permitir entradas no sistema', () => {
    //Act (ações do teste)
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.screenshot('apos-preencher-com-datos-validos')
    cy.get('#login-section > .btn').click()
    cy.screenshot('apos-clicar-no-botao-entrar')
    //cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidados deve apresentar mensagem de erro', () => {
    //Act (ações do teste)
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario) 
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text','Erro no login. Tente novamente.')
  })
})