step0Setup();
step1Setup();

function step0Setup() {
    const step0PuzzlePiece0 = document.getElementById('step-0-puzzlepiece-0');

    const step0PuzzlePiece0Draggable = new Draggable.default(step0PuzzlePiece0, {
        draggable: 'img'
    });

    step0PuzzlePiece0Draggable.on('drag:start', () => console.log('drag:start'));
    step0PuzzlePiece0Draggable.on('drag:move', () => console.log('drag:move'));
    step0PuzzlePiece0Draggable.on('drag:stop', () => console.log('drag:stop'));
}

function step1Setup() {
    const step1PuzzlePiece0 = document.getElementById('step-1-puzzlepiece-0');

    let step1PuzzlePiece0Draggable = new Draggable.default(step1PuzzlePiece0, {
        draggable: 'img'
    });

    step1PuzzlePiece0Draggable.on('drag:start', () => console.log('drag:start'));
    step1PuzzlePiece0Draggable.on('drag:move', () => console.log('drag:move'));
    step1PuzzlePiece0Draggable.on('drag:stop', () => console.log('drag:stop'));

    const step1PuzzlePiece1 = document.getElementById('step-1-puzzlepiece-1');

    const step1PuzzlePiece1Draggable = new Draggable.default(step1PuzzlePiece1, {
        draggable: 'img'
    });

    step1PuzzlePiece1Draggable.on('drag:start', () => console.log('drag:start'));
    step1PuzzlePiece1Draggable.on('drag:move', () => console.log('drag:move'));
    step1PuzzlePiece1Draggable.on('drag:stop', () => console.log('drag:stop'));
}