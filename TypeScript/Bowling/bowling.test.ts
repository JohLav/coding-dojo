import { expect, test } from 'vitest';

const FRAME_SEPARATOR = ' ';
const GUTTER = '-';

function bowlingScoreCalculate(game: string): number {
  let totalScore = 0;
  const frames = game.split(FRAME_SEPARATOR);

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    let frameScore = 0;

    const roll1 = frame.charAt(0);
    const roll2 = frame.charAt(1);

    if (roll2 === '/') {
      if (i === 9) {
        const roll3 = frame.charAt(2);
        const roll3Score = roll3 !== GUTTER ? parseInt(roll3) : 0;
        frameScore += 10 + roll3Score;
      } else {
        const nextFrame = frames[i + 1];
        const nextRoll1 = nextFrame.charAt(0);
        frameScore = 10 + parseInt(nextRoll1);
      }
    } else {
      const roll1Score = roll1 !== GUTTER ? parseInt(roll1) : 0;
      const roll2Score = roll2 !== GUTTER ? parseInt(roll2) : 0;
      frameScore = roll1Score + roll2Score;
    }

    totalScore += frameScore;
  }
  return totalScore;
}

test('the total score should be 0 when the rolls only hit gutter', () => {
  expect(bowlingScoreCalculate('-- -- -- -- -- -- -- -- -- --')).toBe(0);
});

test('the total score should be 90 when the player only knock down 9 pins per frame', () => {
  expect(bowlingScoreCalculate('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-')).toBe(90);
});

test('the total score should be equal to the number of pins knocked down', () => {
  expect(bowlingScoreCalculate('53 3- 45 7- 24 32 22 52 34 44')).toBe(64);
});

test('should calculate the total score when there is "spare" in the game', () => {
  expect(bowlingScoreCalculate('5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 52')).toBe(142);
});

test('should calculate the total score when there is "spare" in the game and "spare" in the last frame', () => {
  expect(bowlingScoreCalculate('5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5')).toBe(150);
});
