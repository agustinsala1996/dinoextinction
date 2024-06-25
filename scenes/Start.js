export default class End extends Phaser.Scene {
  constructor() {
    super("Start");
  }

  init() {}

  preload() {
    //fondo
    this.load.image("fondonegro", "../public/assets/blackbackground.png");
    //boton
    this.load.image("boton", "../public/assets/playbutton.png");
  }

  create() {
    //fondo
    this.fondonegro = this.add.image(400, 300, "fondonegro");

    //boton
    this.boton = this.add.image(400, 300, "boton").setInteractive();

    this.boton.on("pointerdown", () => {
      this.scene.start("Game");
    });
  }

  update() {}
}
