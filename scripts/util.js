function addEventListeners(el, eventNames, f) {
  eventNames.forEach(eventName => {
    el.addEventListener(eventName, f);
  });
}
