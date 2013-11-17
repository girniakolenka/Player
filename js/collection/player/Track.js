N13.define('App.collection.player.Track', {
    extend  : 'Backbone.Collection',
    requires: ['App.model.player.Track'],
    configs: {
        url     : 'resources/songs.json'
    },

    init   : function() {
        this.callParent(arguments);

        this.model  = App.model.player.Track;
    }
 });
