import Timeouts from "./elements/Timeouts.js";

class Waits {
    async waitUntil (condition, {
      timeout = Timeouts.DEFAULT_WAIT_TIMEOUT,
      interval = Timeouts.DEFAULT_WAIT_INTERVAL,
      timeoutMsg = `Condition not met in ${timeout / 1000} seconds`} = {}) {
        return browser.waitUntil(async () => {
            try {
              return await condition();
            } catch(e){
              return false;
            }
          }, { timeout, interval, timeoutMsg });
    }
  }
  export default Waits;

 