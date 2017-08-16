
module.exports = class Patito {
  static greet(name) {
    if (name == null) { return 'Hello Stranger'; }
    return `Hellos ${name}`;
  }
};
