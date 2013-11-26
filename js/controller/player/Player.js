// db: general comment: no comments for fields, public methods, properties and so on...
N13.define('App.controller.player.Player', {
    extend  : 'App.controller.base.Controller',
    mixins  : {
        view: 'App.mixin.controller.View',
        ctrl: 'App.mixin.controller.Controller'
    },
    requires: [
        'App.view.player.Container',
        'App.controller.player.Playlist'
    ],
    configs: {
        view       : 'player.Container',
        autoRun    : true,
        controllers: ['player.Playlist']
    },

    initPrivates: function(){ // db: we use one space after() according to our notation
        this.callParent(arguments);

        // db: these fields should be described with JSDoc
        this._controlPanel = null;
        this._playlistGrid = null;
    },

    run: function(){
        this.callParent(arguments);

        this.findController('player.Playlist').setConfig({
            view : this.findView('player.Container > player.PlaylistContainer')
        });

        this._controlPanel      = this.findView('player.Container > player.ControlPanel');
        this._playlistGrid      = this.findView('player.Container > player.PlaylistContainer > player.PlaylistGrid');

        this._playlistGrid.on('play', this._play.bind(this));
        this._controlPanel.on('ended', this._ended.bind(this));

        this.runControllers();
    },

    // db: You should use _onDoXXX() notation for handlers
    // db: name _play() doesn't contains the meaning of this method,
    // db: so, it's hard to understand it's purpose without code investigation
    _play: function(track){
        // db: control panel should contain internal reference to the tracks collection.
        // db: if so, we don't need to set it every time before rendering
        this._controlPanel.setConfig({
            data:{
                track   : track,
                autoPlay: true
            }
        });
        this._controlPanel.render();
    },

    _ended: function(){
        this._playlistGrid.findNext();
    }
});