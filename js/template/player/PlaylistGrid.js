N13.define('App.template.player.PlaylistGrid', {
    statics: {
        data :
            '<table cellspacing = "0" cellpadding = "0" >'+
                '<% _.each(tracks, function(track) { %>'+
                    '<tr>'+
                        '<td class = "track" url = <%= track.url %> ><%= track.url.substr(track.url.lastIndexOf("/")+1, track.url.length) %></td>'+
                        '<td class = "delete"><button type="button">x</button></td>'+
                    '</tr>'+
                '<% }); %>'+
            '</table>'
    }
});
