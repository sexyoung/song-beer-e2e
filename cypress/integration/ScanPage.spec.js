
const sizes = ['iphone-x', 'iphone-xr', 'ipad-2', 'macbook-13'];

describe('掃描頁', () => {
  sizes.forEach((size) => {
    
    before(() => {
      cy.viewport(size);
    });

    beforeEach(() => {
      cy.visit('https://localhost:8080/');
      cy.contains('YES').click();
    });

    describe(`${size}:`, () => {
      it('點選立即掃描是否出現登入方式選項頁？', () => {
        cy.contains('立即掃描').click();
        cy.contains('請選擇登入方式').should('be.visible');
      });
  
      it('臉書登入：勾選已充分閱讀是否可以送出，並開始掃描QRcode？', () => {
        cy.contains('Facebook').click();
      });
      
      // it('選Yes是否成功進入活動頁？', () => {
      //   cy.visit('https://tsb.sexyoung.tw/');
      //   cy.contains('YES').click();
      //   cy.scrollTo('bottom');
      //   cy.contains('爽啤一開，爽勁就來').should('be.visible');
      // });
      
      // it('同一天進行登入，是否沒有再出現18歲Yes no的畫面？', () => {
      //   cy.setCookie('status', 'SBWover18')
      //   cy.visit('https://tsb.sexyoung.tw/');
      //   cy.contains('你，滿18了嗎？').should('not.exist');
      // });
    })
  })
});


// cy.screenshot('HomePage');
// cy.get('[data-testid="Modal"]').parent().click();
// cy.get('[data-testid="Modal"]').should('not.exist');
// cy.visit('/scan');
// cy.get('nav>ul>li').should('have.length', 2);
