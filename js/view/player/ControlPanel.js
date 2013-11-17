N13.define('App.view.player.ControlPanel', {
    extend  : 'App.view.base.View',
    requires: [
        'App.template.player.ControlPanel'
    ],

    configs : {
        template: 'player.ControlPanel',
        track   : '',
        autoPlay: false
    },
    onAfterInit   : function(){
        this.callParent(arguments);
        this.setConfig({
            data: {
                track   : this.track || App.Config.player.defaultTrack,
                autoPlay: this.autoPlay || App.Config.player.autoPlay
            }
        });
    },

    onAfterRender: function(){
        /**
         * hang event here because backbone can't support events with audio
         * events : {
         *  'ended audio' : 'some_handler'
         * }
         */
        this.el.find('audio').on('ended', this._ended.bind(this));

        this.callParent(arguments);
    },

    _ended: function(){
       this.trigger('ended');
    }
});