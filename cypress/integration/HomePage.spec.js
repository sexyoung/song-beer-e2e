
describe('首頁', () => {
  it('進入活動官網頁，有出現是否滿18歲Yes no的畫面？', () => {
    cy.visit('https://tsb.sexyoung.tw/');
    cy.contains('你，滿18了嗎？').should('be.visible');
  });

  it('選no是否出現喝杯牛奶畫面，且無法進入活動頁？', () => {
    cy.contains('NO').click();
    cy.contains('喝杯牛奶 快快長⼤').should('be.visible');
  });
  
  it('選Yes是否成功進入活動頁？', () => {
    cy.visit('https://tsb.sexyoung.tw/');
    cy.contains('YES').click();
    cy.scrollTo('bottom');
    cy.contains('爽啤一開，爽勁就來').should('be.visible');
  });
  
  it('同一天進行登入，是否沒有再出現18歲Yes no的畫面？', () => {
    cy.setCookie('status', 'SBWover18')
    cy.visit('https://tsb.sexyoung.tw/');
    cy.contains('你，滿18了嗎？').should('not.exist');
  });
  
  
});


// cy.screenshot('HomePage');
// cy.get('[data-testid="Modal"]').parent().click();
// cy.get('[data-testid="Modal"]').should('not.exist');
// cy.visit('/scan');
// cy.get('nav>ul>li').should('have.length', 2);

