describe('專案', () => {
  it('選單長度為2', () => {
    cy.visit('/');
    cy.get('nav>ul>li').should('have.length', 2);
  });
})

describe('首頁', () => {
  it('有出現 `首頁` 字樣', () => {
    cy.contains('首頁').should('be.visible');
    // cy.screenshot('HomePage');
  });

  it('有出現 `你18歲了嗎` 彈跳視窗', () => {
    cy.contains('你18歲了嗎').should('be.visible');
  });

  it('關閉 `你18歲了嗎` 彈跳視窗', () => {
    cy.get('[data-testid="Modal"]').parent().click();
    cy.get('[data-testid="Modal"]').should('not.exist');
  });
});

describe('掃描頁', () => {
  it('有出現ScanPage字樣', () => {
    cy.visit('/scan');
    cy.contains('ScanPage').should('be.visible');
    // cy.screenshot('ScanPage');
  });
  
  // it('出現 `Pls Loigin with!`', () => {
  //   cy.contains('Pls Loigin with!').should('be.visible');
  // });
  
  // it('出現 臉書 與 Google 登入', () => {
  //   cy.contains('Facebook SignIn').should('be.visible');
  //   cy.contains('Google SignIn').should('be.visible');
  // });
});