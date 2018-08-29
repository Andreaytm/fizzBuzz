describe("fizzBuzz function", function()  {
    
    beforeEach(function() {
        fizzbuzz= new fizzBuzz();
    });
    
    describe("Returns number, Fizz, Buzz or FizzBuzz", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return FizzBuzz if divisible by 3 & 5", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        
        it("should return Fizz if divisible by 3", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });

        it("should return Buzz if divisible by 5", function() {
            var result = fizzBuzz(25)
            expect(result).toBe("Buzz");
        });

        it("should return return 22 when called as fizzBuzz(22)", function() {
            var result = fizzBuzz(22)
            expect(result).toBe(22);
        });
    });
});
