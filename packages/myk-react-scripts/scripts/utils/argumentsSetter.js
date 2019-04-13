const path = require('path');

const setConfigOverridesPath = () => {
  const configOverridesPath = path.resolve(
    __dirname,
    '../../config/config-overrides.js'
  );
  process.argv.push('--config-overrides', configOverridesPath);
};

module.exports = { setConfigOverridesPath };
