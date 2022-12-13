

describe("acessar o site", () => {
  it('visit website', () => {
    cy.visit('https://buger-eats.vercel.app')
    cy.get('#page-home main h1')
    cy.get('a[href="/deliver"]').click()
  })

  it('verificar se mudei de página', () => {
    cy.visit('https://buger-eats.vercel.app/deliver')
    cy.get(':nth-child(2) > header > h2')
  })

})

describe("fill out registration", () => {
  it("register", () => {
    var deliver = {
      name: 'Aline Meneses',
      cpf: '00000014141',
      email: 'aline123@gmail.com',
      whatssap: '11999999999',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        defails: 'Ap 142',
        district: 'São Paulo/SP'
      }
    }

    cy.get('input[name="name"]').type(deliver.name)
    cy.get('input[name="cpf"]').type(deliver.cpf)
    cy.get('input[name="email"]').type(deliver.email)
    cy.get('input[name="whatsapp"]').type(deliver.whatssap)
  })

  it('Pesquisar o site do QA ninja no Google', () => {
    cy.visit('https://www.google.com')
    cy.get('.gLFyf')
      .type('qa ninja cypress').debug()
      .type('{enter}')
      cy.get('#rso > :nth-child(1) > .g > .kvH3mc > [data-content-feature="1"] > .VwiC3b')
      .should('exist').click()

  })

})




