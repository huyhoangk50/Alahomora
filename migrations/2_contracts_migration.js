var BotRegistry = artifacts.require("./BotRegistry.sol");

module.exports = function(deployer) {
  deployer.deploy(BotRegistry, 3);
};
