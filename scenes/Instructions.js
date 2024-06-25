export default class End extends Phaser.Scene {
  constructor() {
    super("Instructions");
  }

  init() {}
  preload() {
    this.load.image("instrucciones", "./public/assets/instructions.png");
  }
  create() {
    this.r = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.add.image;
  }
  update() {
    if (this.r.isDown) {
      this.scene.start("Start");
    }
  }
}
