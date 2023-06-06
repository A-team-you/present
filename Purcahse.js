document.addEventListener('DOMContentLoaded', function() {
    // button
    const btn_clone = document.querySelector('.btn-add');  // 追加ボタン
    const btn_remove = document.querySelector('.btn-remove');  // 削除ボタン
  
    // clone
    btn_clone.addEventListener('click', function() {
      const textFields = document.querySelectorAll('.text');
      const lastTextField = textFields[textFields.length - 1];  // 最後尾にあるinput
  
      const cloneTextField = lastTextField.cloneNode(true);  // クローンを作成
      cloneTextField.value = '';  // valueをクリア
      lastTextField.parentNode.insertBefore(cloneTextField, lastTextField.nextSibling);  // inputを最後尾に追加
  
      if (textFields.length >= 1) {
        btn_remove.style.display = 'inline-block';  // inputが2つ以上あるときに削除ボタンを表示
      }
    });
  
    // remove
    btn_remove.addEventListener('click', function() {
      const textFields = document.querySelectorAll('.text');
      const lastTextField = textFields[textFields.length - 1];
      lastTextField.parentNode.removeChild(lastTextField);
  
      if (textFields.length <= 2) {
        btn_remove.style.display = 'none';  // inputが2つ未満のときに削除ボタンを非表示
      }
    });
  });
  