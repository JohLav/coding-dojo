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
  items: Array<Item>;
  private readonly BACKSTAGE_CONCERT = 'Backstage passes to a TAFKAL80ETC concert';
  private readonly AGED_BRIE = 'Aged Brie';
  private readonly SULFURAS = 'Sulfuras, Hand of Ragnaros';

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let currentItem = this.items[i];

      if (currentItem.name === this.AGED_BRIE || currentItem.name === this.BACKSTAGE_CONCERT) {
        this.increaseQuality(currentItem);
        if (currentItem.name === this.BACKSTAGE_CONCERT) {
          this.increaseConcertExtrinsicQuality(currentItem);
        }
      } else {
        this.decreaseQuality(currentItem);
      }

      this.decreaseSellIn(currentItem);
      if (this.sellInReached(currentItem)) {
        if (currentItem.name === this.BACKSTAGE_CONCERT) {
          currentItem.quality = 0;
        }

        if (currentItem.name === this.AGED_BRIE) {
          this.increaseQuality(currentItem);
        }

        if (currentItem.name !== this.AGED_BRIE && currentItem.name !== this.BACKSTAGE_CONCERT) {
          this.decreaseQuality(currentItem);
        }
      }
    }

    return this.items;
  }

  private sellInReached(item: Item) {
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
