N13.define('App.template.player.ControlPanel', {
    statics: {
        data :
            '<audio controls <%= autoPlay ?  "autoplay" : "" %> >'+
                '<source src="<%= track %>" type="audio/mpeg">'+
                'Your browser does not support the audio element.'+
            '</audio>'
    }
});


