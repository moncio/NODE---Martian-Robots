# NODE---Martian-Robots

This repository contains an app created with Nodejs to simulate a robot moving in the surface of Mars.

## Explanation

### 🔶 Requirements

✅ Robot turns left when receives "L" instruction.
✅ Robot turns right when receives "R" instruction.
✅ Robot moves forward when receives "F" instruction.
✅ The output indicates the final grid position and orientation of the robot.
✅ The robot has to move inside the control are of the bounds grid, otherwise the app will print "LOST" in the output.

### 🔶  Methodology

To do this exercise, I used TDD methodology in order to produce the solution, following the next steps:
- Write the test.
- Write the production code.
- Refactor.

## 🚀 How to run the Apps

You need to have either [```Node```](https://nodejs.org/es/) or [```Docker```](https://www.docker.com/) previously installed in your computer.

In case you are using **node** directly, you only need to run the following command in order to install the necesary dependencies (Jest).
```
npm install
```

Once installed them, you need to introduce the next command in your terminal to run the tests:
```
npm test
```

To make easier the execution of each solution, everything has been packaged using **docker** and **docker-compose**, so it is required to have this software installed for it.

The following command builds the container:

```
docker-compose -f docker-compose.yml build
```

Once built, the next one executes the container:

```
docker-compose -f docker-compose.yml up -d
```
