N13.define('App.view.player.PlaylistGrid',{
    extend  : 'App.view.base.View',
    requires: [
        'App.template.player.PlaylistGrid'
    ],

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

        this.setConfig({
            data: {
                tracks: this.tracks
            }
        })
    },

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

    /**
     *
     * @param track
     */
    add: function(track){
        this.data.tracks.push(track);
        this.render();
    },

    findNext: function(){
        var selectRow = this.el.find('.selected');
        var track;
        if(selectRow.is('tr:last')){
            track = this.el.find('.track:first');
        }else{
            track = selectRow.next().find('.track');
        }
        this._select(track);
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
        $(e.target).closest('tr').remove();
    }
});