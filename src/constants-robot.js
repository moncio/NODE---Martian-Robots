module.exports = Object.freeze({
    MOVEMENTS_BY_ORIENTATION: {
        'F': {
            N: [0, 1],
            S: [0, -1],
            E: [1, 0],
            W: [-1, 0],
        },
        'L': {
            N: 'W', 
            S: 'E', 
            E: 'N', 
            W: 'S'
        },
        'R': {
            N: 'E', 
            S: 'W', 
            E: 'S', 
            W: 'N'
        } 
    }
});