// db: no comments here
N13.define('App.Application', {
    extend   : 'App.base.App',
    requires : [
        'App.controller.player.Player',
        // db: We don't need a Config here!
        'App.Config'
    ],

    // db: Why do you need an empty method here?
    init     : function() {
        this.callParent(arguments);
    },

    run      : function() {
        // db: it's better to describe here the autoRun config set to true for this controller
        // db: it's hard to understand that from the code
        N13.create('App.controller.player.Player');
    }
}) // db: no ; here
// db: empty line here