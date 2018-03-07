void function() {
  var formWrapper = document.querySelector('.form__wrapper');
  var form = document.querySelector('.view__form');
  var callbackButtom = document.querySelector('.view__stock');
  var URL = '/mail.php';

  callbackButtom.onclick = function(e) {
    e.preventDefault();
    formWrapper.style.display = 'block';
    setTimeout(function() {
      formWrapper.style.opacity = 1;
    },0);
  };
  form.onsubmit = function(e) {
    e.preventDefault();
    var data = new FormData(form);
    fetch(URL, {method: 'POST', body: data})
      .then(function() {
        form.reset();
        formWrapper.style.opacity = 0;
        setTimeout(function() {
          formWrapper.style.display = '';
        },550);
      });
  };
  formWrapper.onclick = function(e) {
    if (e.target != e.currentTarget) return null;
    formWrapper.style.opacity = 0;
      setTimeout(function() {
        formWrapper.style.display = '';
      },550);
  }
}();
