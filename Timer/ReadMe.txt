When creating the timer option.I encountered a problem where wehn I click again again the start button
The speed of the timer which is 1000ms is incresed and the stop function also didn't work.

The above error was rectified using a if statemnt to check for the count of clicks.
setIntnerval function will only run if the clicks in less than two only which i one.Multi=click error will not be an issue anymore.