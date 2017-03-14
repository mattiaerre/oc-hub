'use strict';

(function ($) {
  var options = $('#script-index').data('options');
  $('#button-submit').click(function () {
    $.ajax({
      type: 'POST',
      url: options.baseUrl,
      data: {
        components: [{
          name: 'oc-feedback-form',
          version: '1.X.X',
          parameters: {
            name: $('#input-name').val() || 'John Doe',
            email: $('#input-email').val(),
            message: $('#textarea-message').val()
          }
        }]
      },
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('Accept', 'application/vnd.oc.unrendered+json');
      },
      success: function success(data) {
        var _data$ = data[0],
            status = _data$.status,
            response = _data$.response;

        if (status === 200) {
          var message = 'Dear <span id="span-name">' + response.data.params.name + '</span>,\n            thank you for your valuable feedback!\n            <a href="">\u21BB</a>';
          $('#div-message').html(message);
          $('#form-feedback').hide();
        }
      }
    });
  });
})(window.jQuery);
