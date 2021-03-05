// const sum = require('./index.js');
import { getPercents } from './index.js';
describe("get percents of given number", () => {
    it("100 percent of 150 is: ", ()=> {
        expect(getPercents(100,150)).toBe(150)
    });
    it("50 percent of 150 is: ", ()=> {
        expect(getPercents(50,150)).toBe(75)
    });
    it("20 percent of 150 is: ", ()=> {
        expect(getPercents(20,150)).toBe(30)
    });
    it("1 percent of 150 is: ", ()=> {
        expect(getPercents(1,150)).toBe(1.5)
    });
    it("if percent is negative number ", ()=> {
        expect(getPercents(-5,150)).toBe(0)
    });
    it("first argument is NaN", ()=> {
        expect(getPercents("hello",100)).toBe("One of arguments is not a number")
    });
    it("second argument is NaN", ()=> {
        expect(getPercents(100, "hello")).toBe("One of arguments is not a number")
    });

});
