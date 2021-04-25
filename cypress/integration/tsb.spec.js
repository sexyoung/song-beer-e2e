describe('專案', () => {
  it('選單長度為2', () => {
    cy.visit('/');
    cy.get('nav>ul>li').should('have.length', 2);
  });
})

describe('首頁', () => {
  it('有出現 `首頁` 字樣', () => {
    cy.contains('首頁').should('be.visible');
    cy.screenshot('HomePage');
  });
});

describe('掃描頁', () => {
  it('有出現ScanPage字樣', () => {
    cy.visit('/scan');
    cy.contains('ScanPage').should('be.visible');
    cy.screenshot('ScanPage');
  });
});