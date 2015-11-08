$(document).ready(function () {
  console.log('Starting importing...');

  console.log('Len old posts: ' + oldPosts.length);

  for (var i = 0; i < oldPosts.length; i++) {
    var post = oldPosts[i];
    savePost(post['title'], post['url'], post['body'], post['htmlBody'], post['thumbnailUrl']);
  }
  
});

function savePost(title, url, body, htmlBody, thumbnailUrl) {
  var newPost = new Stamplay.Cobject('post').Model;
  newPost.set('title', title);
  newPost.set('url', url);
  newPost.set('body', body);
  newPost.set('html_body', htmlBody);
  newPost.set('thumbnail_url', thumbnailUrl);

  newPost.save().then(function () {
    console.log('Finished saving');
  });
}