function random() {
  let number = parseInt(Math.random() * 100000);
  return number;
}

class Item {
  static lastId = 0;

  constructor(text) {
    this.id = random();
    this.text = text;
    this.done = false;
  }

}

export default Item
