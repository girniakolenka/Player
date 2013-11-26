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
        // db: should be in onBeforeRender() method
        this.setConfig({
            data: {
                track   : this.track || App.Config.player.defaultTrack,
                autoPlay: this.autoPlay || App.Config.player.autoPlay
            }
        });
    },

    onAfterRender: function(){
        // db: this kind of annotations is used for describing of fields, methods, properties and so on. But not for
        // db: custom comments. Use // or /*...*/ instead
        /**
         * hang event here because backbone can't support events with audio
         * events : {
         *  'ended audio' : 'some_handler'
         * }
         */
        // db: what about unsubscribe from this event?
        // db: it will be added for every render() call
        // db: you should use listen() method for this
        this.el.find('audio').on('ended', this._ended.bind(this));

        this.callParent(arguments);
    },

    _ended: function(){
       this.trigger('ended');
    }
});