var videos = [	
						{title: "Title One", id: "9bZkp7q19f0"}, 
						{title: "Title Two", id: "fPDYj3IMkRI"}, 
						{title: "Title Three", id: "EwTZ2xpQwpA"}, 
   					{title: "Title Four", id: "NcUbhoyS1bs"}, 
						{title: "Title Five", id: "jNQXAC9IVRw"}
					];
					
	  var count = parseInt(Math.random()*5);
	  
      var tag = document.createElement('script')

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
	   
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.ENDED){
			$("#playerWrapper").fadeOut(0);
			$("#buttonWrapper").fadeIn(0);
		}
      }
      function stopVideo() {
        player.stopVideo();
      }

	  function showVideo(video){
		if (!player){
			player = new YT.Player('player', {
			height: '360',
			width: '640',
			controls: 1,
			showinfo: 0,
			modestbranding: 1,
			videoId: video.id,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
				}
			});
		}
		else{
			player.loadVideoById(video.id)
		}
	  }
	  
	  $( ".btn" ).on( "click", function() {
			$("#buttonWrapper").fadeOut(0);
			$("#playerWrapper").fadeIn(0);
			showVideo(videos[count]);
			
		});