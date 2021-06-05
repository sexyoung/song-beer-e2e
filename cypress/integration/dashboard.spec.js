const TOKEN = "49941b39dc0b7fb4375f6ab3a1ecdd44fdcdc3d9";

const LOCAL = "http://localhost:3001/";
const DEV = "https://tsb-dashboard.sexyoung.tw/";

describe("Dashboard", () => {
  describe("Login test", () => {
    // it("login fail", () => {
    //   cy.visit("http://localhost:3001/login?token=error");
    //   cy.contains("掃描狀況⼤表").should("not.be.exist");
    //   cy.contains("已掃描的明細列表").should("not.be.exist");
    //   cy.contains("中獎者清單頁").should("not.be.exist");
    // });
    // it("login success", () => {
    //   cy.visit(`${DEV}login?token=${TOKEN}`);
    //   cy.contains("掃描狀況⼤表").should("be.visible");
    //   cy.contains("已掃描的明細列表").should("be.visible");
    //   cy.contains("中獎者清單頁").should("be.visible");
    // });
    // it("掃描狀況大表，日期表是否可以點選？", () => {
    //   cy.visit(`${DEV}login?token=${TOKEN}`);
    //   cy.contains("08/01").click();
    //   cy.contains("07/13").click();
    //   cy.contains("06/25").click();
    // });
    // it("掃描狀況大表，「已掃描數量」是否顯示實際的「已掃描數量」？", () => {
    //   cy.visit(`${DEV}login?token=${TOKEN}`);
    // });
    // it("掃描狀況大表，「未掃描數量」是否顯示實際的「未掃描數量」？", () => {
    //   cy.visit(`${DEV}login?token=${TOKEN}`);
    // });
    // it("掃描狀況大表，「開獎數量」是否顯示實際的「開獎數量」？", () => {
    //   cy.visit(`${DEV}login?token=${TOKEN}`);
    // });
    // it("掃描狀況大表，「未開獎數量」是否顯示實際的「未開獎數量」？", () => {
    //   cy.visit(`${DEV}login?token=${TOKEN}`);
    // });
    // it("掃描狀況大表，今日序號是否顯示？", () => {
    //   cy.visit(`${DEV}login?token=${TOKEN}`);
    //   cy.contains("今日序號").should("be.visible");
    // });
    // it("掃描狀況大表，獎項已抽出數字是否顯示？", () => {
    //   cy.visit(`${DEV}login?token=${TOKEN}`);
    // });
    it("掃描狀況大表，獎項配額是否可以更改？", () => {
      cy.visit(`${DEV}login?token=${TOKEN}`);
      cy.contains("06/06").click();
      cy.contains("刪除").click();
      cy.contains("刪除").click();
      cy.contains("刪除").click();
      cy.contains("刪除").click();
      cy.contains("刪除").click();
      cy.contains("刪除").click();
      cy.contains("刪除").click();
      cy.contains("刪除").click();
      cy.contains("刪除").click();
      cy.contains("存檔").click();
      cy.contains("冰 桶(1)").click();
      cy.contains("存檔").click();
      cy.contains("刪除").click();
      cy.contains("存檔").click();
      cy.contains("水杯⼩(3)").click();
      cy.contains("水杯⼩(2)").click();
      cy.contains("水杯⼩(1)").click();
      cy.contains("⽔杯⼤(2)").click();
      cy.contains("⽔杯⼤(1)").click();
      cy.contains("野餐墊(2)").click();
      cy.contains("野餐墊(1)").click();
      cy.contains("冰 桶(1)").click();
      cy.contains("行李箱(1)").click();
      cy.contains("存檔").click();
    });
    // it("掃描狀況大表，獎項配額數字更改是否可以存檔？", () => {
    //   cy.visit(`${DEV}login?token=${TOKEN}`);
    //   cy.contains("行李箱(1)").click();
    //   cy.contains("存檔").click();
    //   });
    //   it("掃描狀況大表，獎項配額是否可以刪除？", () => {
    //     cy.visit(`${DEV}login?token=${TOKEN}`);
    //     cy.contains("野餐墊(6)").click();
    //     cy.contains("刪除").click();
    //     cy.contains("存檔").click();
    //   });
    //   it("掃描狀況大表，獎項配額數字更改是否可以取消？", () => {
    //     cy.visit(`${DEV}login?token=${TOKEN}`);
    //     cy.contains("⽔杯⼤(6)").click();
    //     cy.contains("取消").click();
    //   });
    });
  });
  // describe('已掃描頁', () => {
  //   it("switch to scan", () => {
  //     cy.visit(
  //       `${DEV}login?token=${TOKEN}`
  //     );
  //     cy.contains("已掃描的明細列表").click();
  //     cy.contains("讀取中").should("be.visible");
  //     cy.contains("全部").should("be.visible");
  //     cy.contains("查詢").should("be.visible");
  //   });
  //   it("已掃描明細列表，是否可以查詢沒中的帳號或序號？", () => {
  //     cy.visit(
  //       `${DEV}login?token=${TOKEN}`
  //     );
  //     cy.contains("已掃描的明細列表").click();
  //     cy.get('input').type('00231LC');
  //     cy.get('select').select('沒中');
  //     cy.get('form').submit();
  //     cy.contains("讀取中").should("be.visible");
  //     cy.get('input').clear();
  //     cy.get('input').type('越');
  //     cy.get('form').submit();
  //   })
  //   it("已掃描明細列表，是否可以查詢中獎的帳號或序號？", () => {
  //     cy.visit(
  //       `${DEV}login?token=${TOKEN}`
  //     );
  //     cy.contains("已掃描的明細列表").click();
  //     cy.get('input').type('AWHKQ7D');
  //     cy.get('select').select('中獎');
  //     cy.contains("讀取中").should("be.visible");
  //     cy.get('input').clear();
  //     cy.get('input').type('昝琬貞');
  //     cy.get('form').submit();
  //     cy.contains("讀取中").should("be.visible");
  //   })
  //   it("已掃描明細列表，是否可以查詢全部的帳號或序號？", () => {
  //     cy.visit(
  //       `${DEV}login?token=${TOKEN}`
  //     );
  //     cy.contains("已掃描的明細列表").click();
  //     cy.get('select').select('中獎');
  //     cy.get('select').select('全部');
  //     cy.get('select').select('沒中');
  //     cy.get('select').select('全部');
  //   })
  // });
  // describe('中獎頁', () => {
  //   it("中獎者清單頁，資料是否有出現？", () => {
  //     cy.visit(
  //       `${DEV}login?token=${TOKEN}`
  //     );
  //     cy.contains("中獎者清單頁").click();
  //     cy.contains("讀取中").should("be.visible");
  //     cy.contains("行李箱").click();
  //     cy.contains("⽔杯⼤").click();
  //     cy.contains("野餐墊").click();
  //     cy.contains("水杯⼩").click();
  //     cy.contains("冰 桶").click();
  //     cy.contains("昝琬貞").should("be.visible");
  //     cy.contains("AWHKQ7D").should("be.visible");
  //     cy.contains("094159307").should("be.visible");
  //     cy.contains("澎湖縣白沙鄉南橋一路七段442巷511弄831號84樓").should("be.visible");
  //     cy.contains("06/04").should("be.visible");
  //     cy.contains("fb登入帳號 : 昝琬貞").should("be.visible");
  //   });
  // });
