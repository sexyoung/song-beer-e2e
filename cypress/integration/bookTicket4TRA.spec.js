describe('台鐵訂票系統', () => {
  describe('訂票系統', () => {
    it('前往個人訂票頁', () => {
      cy.visit('https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip121/query')
    });
    it('訂票類型可否正常切換', () => {
      cy.contains('完整').click();
      cy.contains('花東常態實名制').click();
      // cy.contains('兩鐵').click();
      cy.contains('連假加班實名制').click();
      cy.contains('原住民返鄉').click();
      cy.contains('快速').click();
    });
    it('輸入身份証字號', () => {
      cy.get('#pid.idmember.pid.form-input').type('A123456789');
    });
    it('選擇出發站', () => {
      cy.get('#startStation.startStation.ui-autocomplete-input').type('宜蘭');
    });
    it('選擇抵達站', () => {
      cy.get('#endStation.endStation.ui-autocomplete-input').type('花蓮');
    });
    it('行程及時段', () => {
      cy.contains('去回').click();
      cy.contains('依時段').click({ force: true });
    });
    it('選擇張數', () => {
      cy.get('#normalQty.normalSeat.seatQty').clear();
      cy.get('#normalQty.normalSeat.seatQty').type(2);
    });
    it('選擇去程時段的車種', () => {
      cy.get('#rideDate1.rideDate').clear();
      cy.get('#rideDate1.rideDate').type(20210630);
      cy.get('#startTime1.form-control.timeRng').select('07:00');
      cy.get('#endTime1.form-control.timeRng').select('12:00');
      cy.contains('太魯閣').click();
    });
    it('選擇回程時段的車種', () => {
      cy.get('#rideDate2.rideDate').type(20210702);
      cy.get('#startTime2.form-control.timeRng').select('16:00');
      cy.get('#endTime2.form-control.timeRng').select('20:00');
      cy.contains('普悠瑪').click({ force: true });
    });
    it('不是機器人 & 訂票', () => {
      // cy.get('#recaptcha-anchor-label').contains('我不是機器人').click();
      cy.get('.btn-sentgroup').contains('訂票').click();
    });
  })
})
