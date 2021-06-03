const token ='68003262c858d4c4cb5483b5faee725d044dc1dc';

const localhost = 'http://localhost:3001/'
const dashboard = 'https://tsb-dashboard.sexyoung.tw/';

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
        `http://localhost:3001/login?token=${token}`
      );
      cy.contains("掃描狀況⼤表").should("be.visible");
      cy.contains("已掃描的明細列表").should("be.visible");
      cy.contains("中獎者清單頁").should("be.visible");
    });

  });
  describe('已掃描頁', () => {
    it("switch to scan", () => {
      cy.visit(
        `http://localhost:3001/login?token=${token}`
      );
      cy.contains("已掃描的明細列表").click();
      cy.contains("讀取中").should("be.visible");
      cy.contains("全部").should("be.visible");
      cy.contains("查詢").should("be.visible");
    });
  });
  describe('中獎頁', () => {
    it("switch to winner", () => {
      cy.visit(
        `http://localhost:3001/login?token=${token}`
      );
      cy.contains("中獎者清單頁").click();
      cy.contains("讀取中").should("be.visible");
    });
  });
});
