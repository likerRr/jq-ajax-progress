# jQuery Ajax Progress
Lightweight jQuery plugin that adds support of `progress` and `uploadProgress` promises to $.ajax()

# Installation

## npm
`npm install jq-ajax-progress`

## bower
`bower install jq-ajax-progress`

## manually
`git clone git@github.com:likerRr/jq-ajax-progress.git`

# How to use

Include `src/jq-ajax-progress.min.js` inside your html after `jQuery` script

## Basic usage
```javascript
$.ajax(url)
  .progress(function(e) {
    // tracking downloading
  })
  .uploadProgress(function(e) {
    // tracking uploading
    // if (e.lengthComputable) {
    //  var percentage = Math.round((e.loaded * 100) / e.total);
    //  console.log(percentage);
    //}
  });
```

## Extended usage
When you have to send a chunked data to client in some cases it would be good to track what part have just received. For this purposes use new boolean option for `$.ajax` - `chunking` (false by default). If it set as `true` a second parameter in callback function will be the chucnk part.

By default all chunked response contains whole text response that already received and you should manually cut it if you need to do something with parts. One of a possible case when you send response from command line at server to client and you don't wana client wait for whole response
> Keep in mind, that under the hood whole response is being cutted from the beginning (from zero index)
> until last part's occurrence, so big amount of data (theoretically) may cause a performance troubles. But... just keep
> in mind :)

```javascript
$.ajax(url, {
    chunking: true
  })
  .progress(function(e, part) {
    console.log(part);
  });
```

# Build
Install [node](https://nodejs.org/)

Run `npm install && gulp`

This will compress library into minified version and put it inside `src` folder

# [MIT LICENSE](http://likerrr.mit-license.org/)
