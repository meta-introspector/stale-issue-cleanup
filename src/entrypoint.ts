import * as core from '@actions/core';
import { getAndValidateInputs } from './input';

/*
Step 1: Grab the action inputs
Step 2: Iterate over all open issues
  if Issue has an actionable label -> goto step 3
  else -> skip it
Step 3: Parse the label:action:time mapping
Step 4: Apply labels according to the mapping
*/

async function run() {
  try {
    const args = getAndValidateInputs();
  } catch (e) {
    if (e instanceof Error) {
      core.setFailed(e.message);
    }
  }
}

run();