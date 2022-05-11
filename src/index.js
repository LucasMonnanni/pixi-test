import "./styles.css";
import * as PIXI from "pixi.js";

const pixis = () => {
  const app = new PIXI.Application({
    width: 512,
    height: 512
  });

  document.body.appendChild(app.view);
  const rect = new PIXI.Graphics();
  rect.beginFill(0xff0f0);
  rect.drawRect(0, 0, 100, 100);
  rect.endFill();
  rect.position.set(150, 150);
  rect.pivot.set(50, 50);

  const sprite = new PIXI.Sprite(PIXI.Texture.WHITE);

  app.stage.addChild(rect);
  app.stage.addChild(sprite);

  sprite.position.set(0, 300);
  sprite.tint = 0xff0000;
  sprite.width = 512;
  sprite.height = 1;

  let state = play;
  app.ticker.add((delta) => loop(delta));

  function loop(delta) {
    state(delta);
  }

  function play(delta) {
    rect.rotation += ((Math.PI * 2) / 60) * delta;
  }
};
pixis();
