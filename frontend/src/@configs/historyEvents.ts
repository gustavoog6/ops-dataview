(function () {
  // Save original methods
  const originalPush = window.history.pushState;
  const originalReplace = window.history.replaceState;

  // Override pushState
  window.history.pushState = function (...args) {
    originalPush.apply(window.history, args);
    // After state is pushed, emit a custom "locationchange" event
    window.dispatchEvent(new Event('locationchange'));
  };

  // Override replaceState
  window.history.replaceState = function (...args) {
    originalReplace.apply(window.history, args);
    window.dispatchEvent(new Event('locationchange'));
  };

  // Also dispatch on popstate (back/forward)
  window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'));
  });
})();
