// Generated by CoffeeScript 1.9.1
var Game;

Game = (function() {
  function Game() {}

  Game.player = null;

  Game.cursors = null;

  Game.prototype.create = function() {
    var x, y;
    x = this.game.width / 2;
    y = this.game.height / 2;
    this.player = this.add.sprite(x, y, 'player');
    this.input.onDown.add(this.onInputDown, this);
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.defaultRestitution = 0.8;
    this.game.physics.p2.enable(this.player);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    return this.player.body.setZeroDamping();
  };

  Game.prototype.update = function() {
    this.player.body.setZeroVelocity();
    if (this.cursors.left.isDown) {
      this.player.body.moveLeft(400);
    } else if (this.cursors.right.isDown) {
      this.player.body.moveRight(400);
    }
    if (this.cursors.up.isDown) {
      return this.player.body.moveUp(400);
    } else if (this.cursors.down.isDown) {
      return this.player.body.moveDown(400);
    }
  };

  Game.prototype.onInputDown = function() {
    return this.game.state.start('menu');
  };

  return Game;

})();

module.exports = Game;