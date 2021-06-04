const TOKEN ='277e02155124c2cd1abc6d05e6f3065ba7fb0068';

const LOCAL = 'http://localhost:3001/'
const DEV = 'https://tsb-dashboard.sexyoung.tw/';

describe("Dashboard", () => {
  describe("Login test", () => {
    it("login fail", () => {
      cy.visit("http://localhost:3001/login?token=error");
      cy.contains("掃描狀況⼤表").should("not.be.exist");
      cy.contains("已掃描的明細列表").should("not.be.exist");
      cy.contains("中獎者清單頁").should("not.be.exist");
    });
    it("login success", () => {

      cy.visit(
        `${LOCAL}login?token=${TOKEN}`
      );
      cy.contains("掃描狀況⼤表").should("be.visible");
      cy.contains("已掃描的明細列表").should("be.visible");
      cy.contains("中獎者清單頁").should("be.visible");
    });

  });
  describe('已掃描頁', () => {
    it("switch to scan", () => {
      cy.visit(
        `${LOCAL}login?token=${TOKEN}`
      );
      cy.contains("已掃描的明細列表").click();
      cy.contains("讀取中").should("be.visible");
      cy.contains("全部").should("be.visible");
      cy.contains("查詢").should("be.visible");
    });
    it("已掃描明細列表，是否可以查詢沒中的帳號或序號？", () => {
      cy.visit(
        `${LOCAL}login?token=${TOKEN}`
      );
      cy.contains("已掃描的明細列表").click();
      cy.get('input').type('00231LC');
      cy.get('select').select('沒中');
      cy.get('form').submit();
      cy.contains("讀取中").should("be.visible");
      cy.get('input').clear();
      cy.get('input').type('越');
      cy.get('form').submit();
    })
    it("已掃描明細列表，是否可以查詢中獎的帳號或序號？", () => {
      cy.visit(
        `${LOCAL}login?token=${TOKEN}`
      );
      cy.contains("已掃描的明細列表").click();
      cy.get('input').type('meng');
      cy.get('select').select('中獎');
      cy.get('form').submit();
      cy.contains("讀取中").should("be.visible");
      cy.get('input').clear();
      cy.get('input').type('kellyu00621');
      cy.get('form').submit();
      cy.contains("讀取中").should("be.visible");
    })
    it("已掃描明細列表，是否可以查詢全部的帳號或序號？", () => {
      cy.visit(
        `${LOCAL}login?token=${TOKEN}`
      );
      cy.contains("已掃描的明細列表").click();
      cy.get('select').select('中獎');
      cy.get('select').select('全部');
      cy.get('select').select('沒中');
      cy.get('select').select('全部');
    })
  });
  // describe('中獎頁', () => {
  //   it("switch to winner", () => {
  //     cy.visit(
  //       `${LOCAL}login?token=${TOKEN}`
  //     );
  //     cy.contains("中獎者清單頁").click();
  //     cy.contains("讀取中").should("be.visible");
  //   });
  // });
});
