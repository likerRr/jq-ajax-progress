# jq-ajax-progress
jQuery plugin that adds support of `progress` promise

# How to
```javascript
$.ajax(url)
  .progress(function() {
    // tracking downloading
  })
  .uploadProgress(function() {
    // tracking uploading
  });
```

# LICENSE
[MIT](http://likerrr.mit-license.org/)
