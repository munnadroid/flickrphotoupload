flickrphotoupload
=================

Flickr Photo Upload in Android Phonegap using zepto and javascript.

Tested
--------
- Android 4.0.3
- Cordova 2.1.0


Workflow
--------------
To upload photos in flickr, we have to generate md5 hash. Generate md5 hash using md5.js. 
It requires secret key, api key and auth token.  

      md5(secret + "api_key" + apiKey + "auth_token" +token);

Upload code is:
        
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
        

How to make it works ?
----------------------
- Enter appkey in #30 of script.js
- Enter secretkey in #31 of script.js
- Enter authtoken in #32 of script.js
