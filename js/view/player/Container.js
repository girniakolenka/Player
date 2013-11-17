N13.define('App.view.player.Container', {
    extend  : 'App.view.base.View',
    requires: [
        'App.template.player.Container',
        'App.view.player.ControlPanel',
        'App.view.player.PlaylistContainer'
    ],
    configs: {
        elPath    : '.container',
        autoRender: true,
        items     : ['player.ControlPanel', 'player.PlaylistContainer'],
        template  : 'player.Container'
    }
});