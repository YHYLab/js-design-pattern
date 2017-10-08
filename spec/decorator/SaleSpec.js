var Sale = require('../../decorator/Sale');

describe("Test decorator pattern.", function () {

    it("Test fedtax decorator", function () {
        var sale = new Sale(100);
        sale.decorate('fedtax');
        expect(sale.getPrice()).toEqual(105);
    });
    
    it("Test fedtax decorator", function () {
        var sale = new Sale(100);
        sale.decorate('fedtax');
        sale.decorate('quebec');
        expect(sale.getPrice()).toEqual(112.875);        
    });


});