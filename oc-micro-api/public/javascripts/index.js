((params, $) => {
  setTimeout(() => {
    $.ajax({
      type: 'GET',
      url: `${params.baseUrl}oc-micro-api/?render=api`,
      beforeSend: (xhr) => { xhr.setRequestHeader('Accept', 'application/vnd.oc.unrendered+json'); },
      success: (response) => {
        console.log(JSON.stringify(response.data, null, 2)); // eslint-disable-line no-console
        $('#oc-micro-api span').text(response.data.message);
      }
    });
  }, 2500);
})(window.params, window.jQuery);
