N13.define('App.controller.player.Playlist', {
    extend  : 'App.controller.base.Controller',
    requires: [
        'App.collection.player.Track',
        'App.view.player.PlaylistContainer'
    ],
    mixins  : {
        view: 'App.mixin.controller.View'
    },
    configs : {
        noView: true
    },

    initPrivates: function(){
        this.callParent(arguments);

        this._collection   = null;
        this._playlistGrid = null;
        this._addButton    = null;
    },

    run: function(){
        this.callParent(arguments);

        var me = this;

        this._collection        = new App.collection.player.Track();
        this._playlistGrid      = this.findView('player.PlaylistContainer > player.PlaylistGrid');
        this._addButton         = this.findView('player.PlaylistContainer > Button');

        this._addButton.on('clicked', this._add.bind(this));
        this._collection.fetch({
            success: function(collection, response, options){
                me._playlistGrid.setConfig({
                    data:{
                        tracks   : response.items
                    }
                });
                me._playlistGrid.render();
            }
        });
    },

    _add: function(){
        var newTrack = prompt("Please enter url to new track","new track");
        if(newTrack){
            this._playlistGrid.add({
                url: newTrack
            });
        }
    }
})