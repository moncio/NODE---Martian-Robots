const moveRobot = require('../src/martian-Robot');

describe('Robot turns left', () => {

    test('Robot turns left when the orientation is North', () => {
        const position = moveRobot('5 3', '2 2 N', 'L');

        expect(position).toBe('2 2 W');
    });

    test('Robot turns left when the orientation is West', () => {
        const position = moveRobot('5 3', '3 2 W', 'L');

        expect(position).toBe('3 2 S');
    });

    test('Robot turns left when the orientation is South', () => {
        const position = moveRobot('5 3', '4 1 S', 'L');

        expect(position).toBe('4 1 E');
    });

    test('Robot turns left when the orientation is East', () => {
        const position = moveRobot('5 3', '0 2 E', 'L');

        expect(position).toBe('0 2 N');
    });
});

describe('Robot turns right', () => {

    test('Robot turns right when the orientation is North', () => {
        const position = moveRobot('5 3', '2 2 N', 'R');

        expect(position).toBe('2 2 E');
    });

    test('Robot turns right when the orientation is East', () => {
        const position = moveRobot('5 3', '3 2 E', 'R');

        expect(position).toBe('3 2 S');
    });

    test('Robot turns right when the orientation is South', () => {
        const position = moveRobot('5 3', '4 1 S', 'R');

        expect(position).toBe('4 1 W');
    });

    test('Robot turns right when the orientation is West', () => {
        const position = moveRobot('5 3', '0 2 W', 'R');

        expect(position).toBe('0 2 N');
    });
});

describe('Robot moves forward', () => {
    test('Robot moves forward when the orientation is North', () => {
        const position = moveRobot('5 3', '2 2 N', 'F');

        expect(position).toBe('2 3 N');
    });

    test('Robot moves forward when the orientation is East', () => {
        const position = moveRobot('5 3', '3 2 E', 'F');

        expect(position).toBe('4 2 E');
    });

    test('Robot moves forward when the orientation is South', () => {
        const position = moveRobot('5 3', '3 1 S', 'F');

        expect(position).toBe('3 0 S');
    });

    test('Robot moves forward when the orientation is West', () => {
        const position = moveRobot('5 3', '1 2 W', 'F');

        expect(position).toBe('0 2 W');
    });
});

describe('Robot receives several instructions', () => {
    test('Robot moves forward twice when the orientation is North', () => {
        const position = moveRobot('5 4', '2 2 N', 'FF');

        expect(position).toBe('2 4 N');
    });

    test('Robot moves forward three times when the orientation is North', () => {
        const position = moveRobot('5 5', '2 2 N', 'FFF');

        expect(position).toBe('2 5 N');
    });

    test('Robot turns right twice when the orientation is North', () => {
        const position = moveRobot('5 3', '3 2 N', 'RR');

        expect(position).toBe('3 2 S');
    });

    test('Robot turns right three times when the orientation is North', () => {
        const position = moveRobot('5 3', '3 2 N', 'RRR');

        expect(position).toBe('3 2 W');
    });

    test('Robot turns right and moves forward when the orientation is North', () => {
        const position = moveRobot('5 3', '0 0 N', 'RF');

        expect(position).toBe('1 0 E');
    });

    test('Robot turns right, moves forward and turns right again when the orientation is North', () => {
        const position = moveRobot('5 3', '0 0 N', 'RFR');

        expect(position).toBe('1 0 S');
    });
});

describe('Out of bounds', () => {
    test('Robot is lost when exceedes North boundary', () => {
        const position = moveRobot('5 3', '0 3 N', 'F');

        expect(position).toBe('0 3 N LOST');
    });

    test('Robot is lost when exceedes South boundary', () => {
        const position = moveRobot('5 4', '1 0 S', 'F');

        expect(position).toBe('1 0 S LOST');
    });

    test('Robot is lost when exceedes East boundary', () => {
        const position = moveRobot('5 4', '5 0 E', 'F');

        expect(position).toBe('5 0 E LOST');
    });
    test('Robot is lost when exceedes West boundary', () => {
        const position = moveRobot('5 4', '0 0 W', 'F');

        expect(position).toBe('0 0 W LOST');
    });

    test('Robot cannot move forward once it is lost', () => {
        const position = moveRobot('5 4', '0 0 W', 'FF');

        expect(position).toBe('0 0 W LOST');
    });

    test('Robot cannot turn right once it is lost', () => {
        const position = moveRobot('5 4', '0 0 W', 'FR');

        expect(position).toBe('0 0 W LOST');
    });

    test('Robot cannot turn left once it is lost', () => {
        const position = moveRobot('5 4', '0 0 W', 'FL');

        expect(position).toBe('0 0 W LOST');
    });
});
