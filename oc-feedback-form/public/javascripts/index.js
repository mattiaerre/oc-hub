(($) => {
  const options = $('#script-index').data('options');
  $('#button-submit').click(() => {
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
      beforeSend: (xhr) => { xhr.setRequestHeader('Accept', 'application/vnd.oc.unrendered+json'); },
      success: (data) => {
        const { status, response } = data[0];
        if (status === 200) {
          const message =
            `Dear <span id="span-name">${response.data.params.name}</span>,
            thank you for your valuable feedback!
            <a href="">↻</a>`;
          $('#div-message').html(message);
          $('#form-feedback').hide();
        }
      }
    });
  });
})(window.jQuery);
