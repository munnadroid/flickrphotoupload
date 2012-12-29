Zepto(function($) {

	$('#uploadphoto').on('touchstart',function(e){
			e.preventDefault();
			
			// Retrieve image file location from specified source
				navigator.camera.getPicture(uploadPhoto,
		      function(message) { navigator.notification.alert(
		              "You didn't select any picture to upload",  // message
		              dismissAlert,         // callback
		              'Alert',            // title
		              'ok'                  // buttonName
		          ); },
		      { quality: 50, 
		      destinationType: navigator.camera.DestinationType.FILE_URI,
		      sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
		      );
		});

});

function dismissAlert(){
	//do something here
}

function uploadPhoto(imageURI) {
			var hash;
	
			////////////////////////////////////////
			var apiKey = "enter_your_api_key_here";
			var secret = "enter_your_secret_key_here"; 
			var token='user_authtoken_here';
			////////////////////////////////////////

				var options = new FileUploadOptions(); 
				options.fileKey="photo"; 
				options.fileName="image.jpg"; 
				options.mimeType="image/jpeg";

				var params = new Object();
				params.api_key = apiKey;
				params.auth_token=token;
				hash = md5(secret + "api_key" + apiKey + "auth_token" +token);

				params.api_sig = hash;
				options.params = params;

				var ft = new FileTransfer(); 
				ft.upload(imageURI, encodeURI("http://api.flickr.com/services/upload/"), winflickr, failflickr, options);
	
}

function winflickr(r) {
    console.log("test Code = " + r.responseCode);
    console.log("test Response = " + r.response);
    console.log("test Sent = " + r.bytesSent);
	
	//do something here on success
	// r.response is in xml format
}

function onConfirm(buttonIndex){
	//do something here
}

function failflickr(error) {
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
   
   //do something here on fail
}