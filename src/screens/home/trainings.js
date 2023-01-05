export const CategoryType = {
  ELECTRONICS: 'Electronics',
  MENSWEAR: 'Clothings',
  BOOK: 'Books',
};

export class Category {
  constructor(title, level, category, image) {
    this.title = title;
    this.level = level;
    this.image = image;
    this.category = category;
  }

  get formattedLevel() {
    return `${this.level}`;
  }

  get getCategory() {
    return `${this.category}`;
  }

  static laptops() {
    return new Category(
      'Laptops',
      CategoryType.ELECTRONICS,
      'LAPTOPS',
      require('../../assets/images/dog.jpg'),
    );
  }

  static mobiles() {
    return new Category(
      'Brand Mobiles',
      CategoryType.ELECTRONICS,
      'MOBILES',
      require('../../assets/images/dog.jpg'),
    );
  }

  static accessories() {
    return new Category(
      'Accessories',
      CategoryType.ELECTRONICS,
      'ACCESSORIES',
      require('../../assets/images/dog.jpg'),
    );
  }

  static mensWear() {
    return new Category(
      "Men's Wear",
      CategoryType.MENSWEAR,
      'CLOTHINGS',
      require('../../assets/images/dog.jpg'),
    );
  }

  static books() {
    return new Category(
      'Best Reads',
      CategoryType.BOOK,
      'BOOKS',
      require('../../assets/images/dog.jpg'),
    );
  }
}
