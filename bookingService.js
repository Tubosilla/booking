function bookService(service) {
  showPage('booking');
  setTimeout(function(){
    document.querySelectorAll('.service-opt').forEach(function(o){
      if (o.dataset.service === service) { o.click(); }
    });
  }, 200);
}