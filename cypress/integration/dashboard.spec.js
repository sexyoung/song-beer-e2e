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
        "http://localhost:3001/login?token=9576c6818ac662b1449e48ec1fe0226f5a8d271b"
      );
      cy.contains("掃描狀況⼤表").should("be.visible");
      cy.contains("已掃描的明細列表").should("be.visible");
      cy.contains("中獎者清單頁").should("be.visible");
    });
  });
  describe('已掃描頁', () => {
    it("switch to scan", () => {
      cy.visit("http://localhost:3001/scaned");
    });
  });
  describe('中獎頁', () => {
    it("switch to winner", () => {
      cy.visit("http://localhost:3001/winner")
    })
  })
});
