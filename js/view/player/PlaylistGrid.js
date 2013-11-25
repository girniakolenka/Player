N13.define('App.view.player.PlaylistGrid',{
    extend  : 'App.view.base.View',
    requires: [
        'App.template.player.PlaylistGrid'
    ],
// db: we don't need an empty line here. Empty line should be after all properties and between methods
    configs : {
        template: 'player.PlaylistGrid',
        tracks  : []
    },

    initPrivates: function(){
        this.callParent(arguments);

        this._selRow = null;
    },

    onAfterInit: function(){
        this.callParent(arguments);
        // db: this code should be in onBeforeRender() method
        this.setConfig({
            data: {
                tracks: this.tracks
            }
        })
    },

    // db: and?? :)
    /**
     * TODO refactor using events!!!!!
     */
/*    events : {
        'click td.track' : '_play',
        'click td.delete': '_delete'
    },*/
    onAfterRender: function () {
        this.el.find('.track').on('click', this._play.bind(this));
        this.el.find('.delete').on('click', this._delete.bind(this));
        this.callParent();
    },

    // db: good comment ;)
    // db: you don't need to have this method in public. The better way os to track add event in tracks collection
    /**
     *
     * @param track
     */
    add: function(track){
        // db: it's bad idea to set tracks into the data. Better to set them into this.tracks and
        // db: later, use it inside onBeforeRender() method
        this.data.tracks.push(track);
        this.render();
    },

    // db: please don't forget about code convention. Please split var, body and return sections with empty line.
    // db: findNext() is a bad name, because it doesn't explain it's meaning. It doesn't find anything. It selects
    // db: next track in the list. So selectNext() will be better.
    findNext: function(){
        var selectRow = this.el.find('.selected');
        var track;
        if(selectRow.is('tr:last')){
            track = this.el.find('.track:first');
        }else{
            track = selectRow.next().find('.track');
        }
        // db: Why do you need to obtain track index all the time. You simply may increment current
        // db: track index with ++ operator and check if current track is the last one.
        this._select(track);
        // db: this trigger should be inside the _select method. ask why ;)
        this.trigger('play', track.attr('url'));
    },

    /**
     * trigger event in main controller App.controller.player.Player to play clicked record
     * @param event object
     */
    _play : function(e){
        this._select($(e.target));
        this.trigger('play', $(e.target).attr('url'));
    },

    _select : function(track){
        if(this._selRow){
            this._selRow.closest('tr').removeClass('selected');
        }
        track.closest('tr').addClass('selected');
        this._selRow = track;
    },

    _delete: function(e){
        // db: the track will be removed, but the model will be present inside the collection, doesn't it?
        // db: here, you should just remove track from the collection. nothing else.
        $(e.target).closest('tr').remove();
    }
});