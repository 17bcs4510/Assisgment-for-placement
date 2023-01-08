import { createInstance } from '@optimizely/react-sdk';

// Sample user profile service implementation
const userProfileService = {
  lookup: userId => {
    // Perform user profile lookup
  },
  save: userProfileMap => {
    // Persist user profile
  },
};

const optimizelyClient = createInstance({
  datafile: optimizelyDatafile, // assuming you have a hardcoded datafile
  userProfileService, // Passing your userProfileService created above
});