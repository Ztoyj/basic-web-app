import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return my andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "yujiazhe"
          ));
    });
    test('should return sum', () => {
        const query = "What is 69 plus 17?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "86"
          ));
    });
    test('should return max', () => {
        const query = "Which of the following numbers is the largest: 47, 25, 72?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "72"
          ));
    });
    test('should return multiple', () => {
        const query = "What is 93 multiplied by 35?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "3255"
          ));
    });
    test('should return multiple', () => {
        const query = "Which of the following numbers is both a square and a cube: 121, 1, 788, 4195, 323, 2804, 1331?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "1"
          ));
    });
});