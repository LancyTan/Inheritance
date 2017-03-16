var boot = function(){}
    
boot.prototype = {
    Preload: function(){
        this.game.load.image("loadBar", "assets/loading.png");
    },
    
    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.refresh();
        
        //starts our preload state
        this.game.state.start("Preload");
    }
    
}