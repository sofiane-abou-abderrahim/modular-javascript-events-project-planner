import { ProjectList } from './App/ProjectList.js';

// const DEFAULT_VALUE = 'Max';
/*
In the past when you define a global variable like this,
that spans across your entire app so to say.
it would invisibly automatically be added to the window object which acted as a global object
*/

// window.DEFAULT_VALUE = 'Max';
globalThis.DEFAULT_VALUE = 'Max';
/* "globalThis" is basically an alternative to "this" which points at some globally available object.
This is available both in browser side Javascript and Node.js side Javascript.
The "window" object is not available in both.
*/

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const timerId = setTimeout(this.startAnalytics, 3000);

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId);
    // });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
