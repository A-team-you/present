$(function() {

  // button
  const btn_clone = $('.btn-add');  // 追加ボタン
  const btn_remove = $('.btn-remove');  // 削除ボタン

  // clone
  btn_clone.click(function() {
    
    var text = $('.text').last();  // 最後尾にあるinput

		text
      .clone()  // クローン
      .val('')  // valueもクローンされるので削除する
      .insertAfter(text);  // inputを最後尾に追加
    
    if ($('.text').length >= 2) {
      $(btn_remove).show();  // inputが2つ以上あるときに削除ボタンを表示
    }

  });

  // remove
	btn_remove.click(function() {
  
    $('.text')
      .last()
      .remove();

    if ($('.text').length < 2) {
      btn_remove.hide();  // inputが2つ未満のときに削除ボタンを非表示
    }
    
  });
});
