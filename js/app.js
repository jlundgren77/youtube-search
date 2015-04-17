$(document).ready(function(){

    $('#video-search').submit(function (event){
    	event.preventDefault();
    	var query = $('#query').val();
    	
    	getRequest(query);
    });
    
    $('#content').on('click', '.video-link', function(event){
    	event.preventDefault();
    	
    })
    
	
    function getRequest(query){
    	
        
    	var params = {
    		part: 'snippet, id',
    		key: 'AIzaSyAOG1qU44JDv0yhDZeJY9ob_G_V4_k6Rj8',
    		q: query
    	};
    	var url = 'https://www.googleapis.com/youtube/v3/search';

    	$.getJSON(url, params, function(data){
    		displayResults(data.items);
    		getVideoId(data.items);
    	});
    	
    };
    
   
    function displayResults(results){
    	var watchURL = "http://youtube.com/watch?v=";
    	var html = "";
    	$.each(results, function(index, value){
    		console.log(value.id.videoId);
    		console.log(value.snippet.thumbnails.medium);
    		var thumbnail = value.id.videoId;
    		html += '<li><a href=" ' + watchURL + thumbnail + '"><img src=" ' + value.snippet.thumbnails.medium.url + '""></a><li>';
    	});
    	$('#video-list').html(html);
    }
    
    function getVideo(data){
    	var url = 'https://www.googleapis.com/youtube/v3/search';
    }
    
    
});