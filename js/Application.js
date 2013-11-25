N13.define('App.Application', {
    extend   : 'App.base.App',
    requires : [
        'App.controller.player.Player',
        // We don't need a Config here!
        'App.Config'
    ],
    init     : function() {
        this.callParent(arguments);
    },

    run      : function() {
        N13.create('App.controller.player.Player');
    }
})
