import { expect, test } from 'vitest';

class Card {
  private readonly value: string;
  private suit: string;

  private constructor(value: string, suit: string) {
    this.value = value;
    this.suit = suit;
  }

  static fromStr(cardStr: string): Card {
    return new Card(cardStr.charAt(0), cardStr.charAt(1));
  }

  cardWins(cardToCompare: Card): boolean {
    const cardScoreMatchings = new Map<string, number>([
      ['2', 2],
      ['3', 3],
      ['4', 4],
      ['5', 5],
      ['6', 6],
      ['7', 7],
      ['8', 8],
      ['9', 9],
      ['T', 10],
      ['J', 11],
      ['Q', 12],
      ['K', 13],
      ['A', 14],
    ]);

    const card1Value = this.value;
    const card2Value = cardToCompare.value;

    const card1Score = cardScoreMatchings.get(card1Value);
    const card2Score = cardScoreMatchings.get(card2Value);

    return card1Score > card2Score;
  }
}

test('2 of clubs should have the same score as 2 of hearts', () => {
  expect(Card.fromStr('2C').cardWins(Card.fromStr('2H'))).toBe(false);
});

test('4 of diamonds should have a higher score than 2 of spades', () => {
  expect(Card.fromStr('4D').cardWins(Card.fromStr('2S'))).toBe(true);
});

test('4 of clubs should have a score lower than 8 of diamonds', () => {
  expect(Card.fromStr('4C').cardWins(Card.fromStr('8D'))).toBe(false);
});

test('Ace of clubs should have a score higher than King of hearts', () => {
  expect(Card.fromStr('AC').cardWins(Card.fromStr('KH'))).toBe(true);
});
