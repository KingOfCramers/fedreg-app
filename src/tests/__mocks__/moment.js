const moment = require.requireActual("moment"); // Pulls in original moment library...

export default (timestamp = 0) => { // If we do ask for the current point in time, it's a fixed point in time (at the value in 1970)
  return moment(timestamp);
};