var gameTitle = function(){}
    
gameTitle.prototype = {
    create: function(){
        var gameTitle = this.add.sprite(160, 160, "gametitle");
        gameTitle.anchor.setTo(0.5, 0.5);
        
        var playButton = this.game.add.button(160, 320, "play", this.playTheGame, this);
    }, 
    playTheGame: function(){
        this.game.state.start("TheGame");
        
    }
    
}