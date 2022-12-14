import { Action } from "./Input";
import { hasCollisions, isWithinBoard, rotate } from "./Tetrominoes";

const attemptRotation = ({ board, player, setPlayer }) => {
  let shape = rotate({
    piece: player.tetromino.shape,
    direction: 1,
  });
  const position = player.position;
  const isValidRotation =
    isWithinBoard({ board, position, shape }) &&
    !hasCollisions({ board, position, shape });
  if (isValidRotation) {
    setPlayer({ ...player, tetromino: { ...player.tetromino, shape } });
  } else {
    return false;
  }
};

export const movePlayer = ({ delta, position, shape, board }) => {
  const desiredNextPosition = {
    row: delta.row + position.row,
    column: delta.column + position.column,
  };
  const onBoard = isWithinBoard({
    board,
    position: desiredNextPosition,
    shape,
  });
  const collided = hasCollisions({
    board,
    position: desiredNextPosition,
    shape,
  });
  const preventMove = !onBoard || (onBoard && collided);
  const nextPosition = preventMove ? position : desiredNextPosition;
  const isMovingDown = delta.row > 0;
  const isHit = isMovingDown && (collided || !onBoard);
  return { collided: isHit, nextPosition };
};

export const attemptMovement = ({
  board,
  player,
  setPlayer,
  action,
  setGameOver,
}) => {
  const delta = { row: 0, column: 0 };
  let isFastDropping;
  if (action === Action.FastDrop) {
    isFastDropping = true;
  } else if (action === Action.Left) {
    delta.column += -1;
  } else if (action === Action.Right) {
    delta.column += 1;
  } else if (action === Action.SlowDrop) {
    delta.row += 1;
  }
  const { collided, nextPosition } = movePlayer({
    delta,
    position: player.position,
    shape: player.tetromino.shape,
    board,
  });
  const isGameOver = collided && player.position.row == 0;
  if (isGameOver) {
    setGameOver(isGameOver);
  }
  setPlayer({
    ...player,
    isCollided: collided,
    isFastDropping,
    position: nextPosition,
  });
};

export const playerController = ({
  action,
  board,
  player,
  setPlayer,
  setGameOver,
}) => {
  if (!action) return;
  if (action === Action.Rotate) {
    attemptRotation({ board, player, setPlayer });
  } else {
    attemptMovement({ board, player, setPlayer, action, setGameOver });
  }
};
