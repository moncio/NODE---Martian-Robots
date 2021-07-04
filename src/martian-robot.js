let constants = require('./constants-robot');

let moveRobot = (coordenates, initialPosition, instructions) => {
    finalPosition = initialPosition;
    for (let i = 0; i < instructions.length; i++) {
        instruction = instructions.charAt(i);
        const nextPosition = whereToMove(finalPosition, instruction);
        if (isLost(nextPosition, coordenates))
        {
            return [initialPosition, 'LOST'].join(' ')
        }
        finalPosition =  nextPosition;
    }
    return finalPosition;
}
  
const whereToMove = (position, instruction) => {
    switch (instruction) {
      case 'L':
        return turnToLeft(position);
      case 'R':
        return turnToRight(position);
      case 'F':
        return moveForward(position);
    }
}
  
const turnToLeft = (position) => {
    const gridPositions = position.split(' ');
    const orientation = gridPositions[gridPositions.length - 1];
    return position.replace(orientation, constants.MOVEMENTS_BY_ORIENTATION['L'][orientation]);
}
  
const turnToRight = (position) => {
    const gridPositions = position.split(' ');
    const orientation = gridPositions[gridPositions.length - 1];
    return position.replace(orientation, constants.MOVEMENTS_BY_ORIENTATION['R'][orientation]);
  }
  
const moveForward = (position) =>  {  
    const gridPositions = position.split(' ');
    const orientation = gridPositions[gridPositions.length - 1];
    const movement = constants.MOVEMENTS_BY_ORIENTATION['F'][orientation];
    const x = parseInt(gridPositions[0]) + movement[0];
    const y = parseInt(gridPositions[1]) + movement[1];
  
    return [x, y, orientation].join(' ');
}
  
const isLost = (position, coordenates) => {
    const gridCoordinates = coordenates.split(' ');
    const gridPositions = position.split(' ');

    return (
      gridPositions[0] < 0 ||
      gridPositions[0] > gridCoordinates[0] ||
      gridPositions[1] < 0 ||
      gridPositions[1] > gridCoordinates[1]
    );
}
  
module.exports = moveRobot;
  