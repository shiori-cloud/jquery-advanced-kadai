$(function () {
  // もっと見る

  $('.button-more').on('mouseover', function () {
    $(this).animate(
      {
        marginLeft: 20,
        opacity: 0.5,
      },
      100,
    );
  });

  $('.button-more').on('mouseout', function () {
    $(this).animate(
      {
        marginLeft: 0,
        opacity: 1,
      },
      100,
    );
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  const inputCheck = () => {
    let message = '';
    let error = false;
    let result;
    // お名前
    if ($('#name').val() === '') {
      error = true;
      $('#name').css('background-color', '#f79999');
      message += 'お名前を入力してください。\n';
    } else {
      $('#name').css('background-color', '#fafafa');
    }
    // フリガナ
    if ($('#furigana').val() === '') {
      error = true;
      $('#furigana').css('background-color', '#f79999');
      message += 'フリガナを入力してください。\n';
    } else {
      $('#furigana').css('background-color', '#fafafa');
    }
    // お問い合わせ内容
    if ($('#message').val() === '') {
      error = true;
      $('#message').css('background-color', '#f79999');
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      $('#message').css('background-color', '#fafafa');
    }

    // メールアドレス
    if (
      $('#email').val === '' ||
      $('#email').val().indexOf('@') === -1 ||
      $('#email').val().indexOf('.') === -1
    ) {
      error = true;
      $('#email').css('background-color', '#f79999');
      message +=
        'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      $('#email').css('background-color', '#fafafa');
    }

    // 電話番号
    if ($('#tel').val() !== '' && $('#tel').val().indexOf('-') === -1) {
      error = true;
      $('#tel').css('background-color', '#f79999');
    } else {
      $('#tel').css('background-color', '#fafafa');
    }

    // 都道府県
    if ($('#prefecture').val() === '') {
      error = true;
      $('#prefecture').css('background-color', '#f79999');
      message += 'お住いの都道府県を入力してください\n';
    } else {
      $('#prefecture').css('background-color', '#fafafa');
    }

    // チェックボックス
    if ($('agree').prop('checked') === false) {
      error = true;
      message +=
        '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }

    if (error === true) {
      $('#submit').attr('src', 'images/button-submit.png');
    } else {
      $('#submit').attr('src', 'images/button-submit-blue.png');
    }

    result = {
      error: error,
      message: message,
    };

    return result;
  };

  //   送信ボタンクリック時の処理
  $('#submit').on('click', function (event) {
    event.preventDefault();
    let result = inputCheck();

    let error = result.error;
    let message = result.message;

    if (error == false) {
      alert('お問い合わせを送信しました。');
    } else {
      alert(message);
    }
  });

  $('#name').blur(function () {
    inputCheck();
  });

  $('#furigana').blur(function () {
    inputCheck();
  });

  $('#email').blur(function () {
    inputCheck();
  });

  $('#tel').blur(function () {
    inputCheck();
  });

  $('#message').blur(function () {
    inputCheck();
  });

  $('#prefecture').blur(function () {
    inputCheck();
  });

  $('#agree').on('click', function () {
    inputCheck();
  });
});
