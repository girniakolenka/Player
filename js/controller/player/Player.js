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

    initPrivates: function(){
        this.callParent(arguments);

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

    _play: function(track){
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