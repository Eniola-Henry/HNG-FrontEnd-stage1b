  var el = document.getElementById('epoch-time');
  function tick() {
    var now = Date.now();
    el.textContent = now;
    el.setAttribute('datetime', new Date(now).toISOString());
  }
  tick();
  setInterval(tick, 500);