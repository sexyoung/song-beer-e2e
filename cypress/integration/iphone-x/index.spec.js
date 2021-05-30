
const sizes = ['iphone-x', 'iphone-xr', 'ipad-2', 'macbook-13'];
const token = 'Xk5GBHFsf19V9sbXZUQ773dQQLVGO1BZr4VyVcLqaxa6OjQBckNQC5JBKe1W9f97e65I95VgqLcGrLYRDDSN472bwAfGiMMXErkZQvuoGldSnKhP7ux0eo3TiqMHpZjNdkuSjLO7WtE4wdnV98NPPtIa10eHjKYpR3PRacj2rK0BkZeArGec3bQwvQprWY1FEAPg1PN79RwVYrJuj6sqJA3x6RRfRoAzwpKonPDI4oMNOFK32JABqeAhvhLP0SV';
const key= 'JUZU3rYBt7JprYgeoDd7mIcGbvkBxMz3qguSVof53rWAOtwPwv8KXFtQWAIDgwgD3SfchWEg6ODMcmJsq5ZOaX8htNsrbOpBHk4xOV6sPSmsW6ogolF7TtsoczkfIaFN';

describe('首頁', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/');
  });

  it('進入活動官網頁，有出現是否滿18歲Yes no的畫面？', () => {
    cy.contains('你，滿18了嗎？').should('be.visible');
  });

  it('選no是否出現喝杯牛奶畫面，且無法進入活動頁？', () => {
    cy.contains('NO').click();
    cy.contains('喝杯牛奶 快快長⼤').should('be.visible');
  });
  
  it('選Yes是否成功進入活動頁？', () => {
    cy.contains('YES').click();
    cy.scrollTo('bottom');
    cy.contains('爽啤一開，爽勁就來').should('be.visible');
  });
  
  it('同一天進行登入，是否沒有再出現18歲Yes no的畫面？', () => {
    cy.contains('YES').click();
    cy.visit('/');
    cy.contains('你，滿18了嗎？').should('not.exist');
  });
});

describe('掃描頁', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/scan');
    cy.contains('YES').click();
    // cy.contains('立即掃描').click();
  });

  it('點選立即掃描是否出現登入方式選項頁？', () => {
    cy.contains('請選擇登入方式').should('be.visible');
  });

  it('臉書登入：勾選已充分閱讀是否可以送出，並開始掃描QRcode？', () => {
    localStorage.setItem("ishara", token )
    cy.visit('/private');
    cy.get('input[name=check]').click();
    cy.get('form').submit();
    cy.contains('請掃描罐身QRcode貼紙').should('be.visible');
  });
  
  it('臉書登入：未勾選已充分閱讀是否不可以送出，並開始掃描QRcode？', () => {
    localStorage.setItem("ishara", token )
    cy.visit('/private');
    cy.get('form').submit();
    cy.contains('請掃描罐身QRcode貼紙').should('not.exist');
  });
  
  it('掃描活動QRcode是否就出現過場動畫？', () => {
    localStorage.setItem("ishara", token);
    cy.request({
        method: 'delete',
        url: 'https://tsb-api.sexyoung.tw/api/v1/ticket',
        body:{
          qrcode: '000T9WH',
          key: key,
        }
      })
    localStorage.setItem("FAKE_QRCODE", '000T9WH');
    cy.visit('/scan');
    cy.get('[data-testid="動畫頁"]').should('be.visible');
    // console.log("userAgent", navigator.userAgent);
  });

  it('掃描重複的活動QRcode是否不出現過場動畫？是否出現已經掃描過的結果頁？是否可以繼續掃描？', () => {
    localStorage.setItem("ishara", token);
    cy.request({
      method: 'delete',
      url: 'https://tsb-api.sexyoung.tw/api/v1/ticket',
      body:{
        qrcode: '000T9WH',
        key: key,
      }
    })
    localStorage.setItem("FAKE_QRCODE", '000T9WH');
    cy.visit('/scan');
    cy.get('[data-testid="動畫頁"]').should('be.visible');
    cy.visit('/scan');
    // 1
    cy.get('[data-testid="動畫頁"]').should('not.exist');
    // 2
    cy.contains('此QRcode已經掃描過囉').should('be.visible');
    // 3
    cy.get('button').click();
    cy.contains('請掃描罐身QRcode貼紙').should('be.visible');
  });
});

describe('中獎頁', () => {
  it('過場動畫結束，是否出現中獎結果頁？', () => {
    
  })
  
});



// cy.request({
//   method: 'POST',
//   url: `https://tsb-api.sexyoung.tw/api/v1/ticket?ishara=${token}`,
//   // headers: {'content-type': 'application/json'},
//   body:{
//     qrcode: '000UHWO',
//     date: '2021-06-23',
//     ishara: token,
//   }
// })
// cy.contains('Facebook').click();
// cy.get('input[name=email]').type('97307004@nccu.edu.tw');
// cy.get('input[name=pass]').type('562479lovely');
// cy.get('button').click();
// cy.setCookie('status', 'SBWover18')
// cy.screenshot('HomePage');
// cy.get('[data-testid="Modal"]').parent().click();
// cy.get('[data-testid="Modal"]').should('not.exist');
// cy.visit('/scan');
// cy.get('nav>ul>li').should('have.length', 2);

