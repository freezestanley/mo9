
import './history';

export default function hijackers() {

  const listeners = [], timeouts = [], intervals = [];

  return {
    addEventListener() {
      window.addEventListener.call(window, arguments);
      const args = Array.prototype.slice.call(null, arguments);
      listeners.push(args);
    },
    setTimeout() {
      timeouts.push(window.setTimeout.apply(window, arguments))
    },
    setInterval() {
      intervals.push(window.setInterval.apply(window, arguments))
    },
    __tailor_free() {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
      listeners.forEach(args => window.removeEventListener.apply(window, args))
    }
  }
}