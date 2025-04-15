export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  private readonly BACKSTAGE_CONCERT = 'Backstage passes to a TAFKAL80ETC concert';
  private readonly AGED_BRIE = 'Aged Brie';
  private readonly SULFURAS = 'Sulfuras, Hand of Ragnaros';

  constructor(public items: Item[] = []) { }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
    }
    return this.items;
  }

  private updateItemQuality(item: Item) {
    if (item.name === this.SULFURAS) {
      // No action needed for Sulfuras items
      return;
    }
    if (item.name === this.AGED_BRIE || item.name === this.BACKSTAGE_CONCERT) {
      this.increaseQuality(item);
      if (item.name === this.BACKSTAGE_CONCERT) {
        this.increaseConcertExtrinsicQuality(item);
      }
    } else {
      this.decreaseQuality(item);
    }

    this.decreaseSellIn(item);

    if (this.hasSellInPassed(item)) {
      if (item.name === this.BACKSTAGE_CONCERT) {
        item.quality = 0;
      } else if (item.name === this.AGED_BRIE) {
        this.increaseQuality(item);
      } else {
        this.decreaseQuality(item);
      }
    }
  }

  private hasSellInPassed(item: Item) {
    return item.sellIn < 0;
  }

  private decreaseSellIn(item: Item) {
    if (item.name !== this.SULFURAS) {
      item.sellIn--;
    }
  }

  private increaseConcertExtrinsicQuality(item: Item) {
    if (item.sellIn <= 10) {
      this.increaseQuality(item);
    }
    if (item.sellIn <= 5) {
      this.increaseQuality(item);
    }
  }

  private increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  private decreaseQuality(item: Item) {
    if (item.quality > 0 && item.name !== this.SULFURAS) {
      item.quality--;
    }
  }
}
