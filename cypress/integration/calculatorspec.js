describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('basic maths', () => {
  it('7+2=9', ()=> {
  // arrange
  cy.visit ('http://127.0.0.1:5500/calculator.html');

  //act
  cy.get('[data-cy=7]').click();
  cy.get('[data-cy=plus]').click();
  cy.get('[data-cy=2]').click();
  cy.get('[data-cy=equals]').click();
  //assert
  cy.get('[data-cy=answer]').should("have.value","9")
  })
  it('3*3=9', ()=> {
    // arrange
    cy.visit ('http://127.0.0.1:5500/calculator.html');
  
    //act
    cy.get('[data-cy=3]').click();
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=3]').click();
    cy.get('[data-cy=equals]').click();
    //assert
    cy.get('[data-cy=answer]').should("have.value","9")
    })
  it('2^4=16', ()=> {
    // arrange
    cy.visit ('http://127.0.0.1:5500/calculator.html');
  
    //act
    cy.get('[data-cy=2]').click();
    cy.get('[data-cy=power]').click();
    cy.get('[data-cy=4]').click();
    cy.get('[data-cy=equals]').click();
    //assert
    cy.get('[data-cy=answer]').should("have.value","16")
    })  
  it('7-2=9', ()=> {
    // arrange
    cy.visit ('http://127.0.0.1:5500/calculator.html');
  
    //act
    cy.get('[data-cy=7]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=2]').click();
    cy.get('[data-cy=equals]').click();
    //assert
    cy.get('[data-cy=answer]').should("have.value","5")
    }) 
  it('7+2=9', ()=> {
    // arrange
    cy.visit ('http://127.0.0.1:5500/calculator.html');
  
    //act
    cy.get('[data-cy=9]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=3]').click();
    cy.get('[data-cy=equals]').click();
    //assert
    cy.get('[data-cy=answer]').should("have.value","3")
    })   
  it('71+24=9', ()=> {
    // arrange
    cy.visit ('http://127.0.0.1:5500/calculator.html');
  
    //act
    cy.get('[data-cy=7]').click();
    cy.get('[data-cy=1]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=2]').click();
    cy.get('[data-cy=4]').click();
    cy.get('[data-cy=equals]').click();
    //assert
    cy.get('[data-cy=answer]').should("have.value","95")
    })   

              
})