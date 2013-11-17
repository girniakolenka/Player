N13.define('App.view.player.PlaylistContainer',{
    extend  : 'App.view.base.View',
    requires: [
        'App.view.player.PlaylistGrid',
        'App.template.player.PlaylistContainer',
        'App.view.Button'
    ],
    configs : {
        template: 'player.PlaylistContainer',
        items   : [
            'player.PlaylistGrid',
            {
                cl   : 'Button',
                title: 'Add'
            }
        ]
    }
});