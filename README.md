🧪 Projeto de Testes Automatizados — Banco Web (Cypress)

Este projeto contém a suíte de testes automatizados end-to-end da aplicação Banco Web
, desenvolvida utilizando o Cypress com organização modular, Custom Commands e geração automática de relatórios com cypress-mochawesome-reporter.

🚀 Objetivo

Validar as principais funcionalidades da aplicação Banco Web, garantindo a qualidade e estabilidade do sistema através de testes automatizados executados em um ambiente controlado.

🧩 Componentes do Projeto
Diretório / Arquivo	Descrição
cypress/e2e/	Contém os arquivos de testes automatizados divididos por funcionalidade.
cypress/fixtures/	Contém dados de entrada estáticos utilizados nos testes (ex: payloads de login, transferências etc).
cypress/support/commands/	Define os Custom Commands que encapsulam ações repetitivas (ex: login, criação de transferência).
cypress/support/e2e.js	Arquivo principal de configuração e importação dos comandos personalizados.
cypress.config.js	Arquivo de configuração do Cypress, onde são definidos reporter, baseUrl e outras opções.
package.json	Lista todas as dependências e scripts de execução do projeto.
mochawesome-report/	Diretório onde são gerados os relatórios de execução em formato HTML.

⚙️ Pré-requisitos

Antes de executar os testes, é necessário que:

A API esteja em execução:
👉 Banco API: https://github.com/juliodelimas/banco-api

A aplicação Web esteja em execução:
👉 Banco Web: https://github.com/juliodelimas/banco-web

Node.js (versão 18 ou superior) e npm estejam instalados na máquina.

🛠️ Instalação
git clone https://github.com/SEU_USUARIO/banco-web-tests.git
cd banco-web-tests
npm install

▶️ Execução dos Testes
Modo interativo (GUI do Cypress)
npm run cy:open

Modo headless (linha de comando)
npm test

Gerar relatório HTML
npx mochawesome-merge cypress/reports/*.json > mochawesome.json
npx marge mochawesome.json --reportDir mochawesome-report


O relatório final ficará disponível em:

mochawesome-report/mochawesome.html

🧰 Custom Commands

Os Custom Commands foram criados para tornar o código mais limpo e reutilizável.
Eles estão localizados em cypress/support/commands/.

Arquivo	Descrição
common.js	Ações genéricas e verificações reutilizáveis.
login.js	Comandos relacionados à autenticação de usuários.
transferencia.js	Comandos usados para criar e validar transferências bancárias.

🧪 Estrutura dos Testes

Os testes seguem o padrão AAA (Arrange – Act – Assert) e estão divididos por funcionalidades.

Exemplo: Testes de Login
describe('Login', () => {
  beforeEach(() => {
    // Arrange (preparações)
    cy.visit('/')
    cy.screenshot('Apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act
    cy.fazerLoginComCredenciaisValidas()
    cy.screenshot('apos-clicar-no-botao-entrar')

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Act
    cy.fazerLoginComCredenciaisInvalidas()

    // Assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})


Esses testes validam os fluxos principais de login:

Sucesso: usuário é autenticado e redirecionado à tela de transferências.

Falha: mensagem de erro é exibida via toast.

🧾 Relatórios de Execução

O projeto utiliza cypress-mochawesome-reporter para gerar relatórios detalhados com:

Resultados de cada teste

Capturas de tela automáticas

Status (passed, failed, skipped)

Gráficos e métricas agregadas

Exemplo de configuração:

reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
  reportDir: 'mochawesome-report',
  charts: true,
  embeddedScreenshots: true,
  inlineAssets: true,
}

🏗️ Boas Práticas Aplicadas

Organização modular dos testes

Reutilização de código com Custom Commands

Uso de fixtures para dados dinâmicos

Captura automática de screenshots

Relatórios visuais e métricas de execução

🏁 Conclusão

Este projeto demonstra boas práticas de automação com Cypress, integrando testes end-to-end, Custom Commands, Fixtures e relatórios automatizados, garantindo rastreabilidade e confiabilidade no processo de validação da aplicação Banco Web.
