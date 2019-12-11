/*
  Gets Flow ID
*/
const os = require('os');

module.exports = function (RED) {
    function getflowidnode(config) {
        RED.nodes.createNode(this, config);
        this.name = config.name;
        var node = this;
        node.on("input", function (msg) {
            msg.payload = {
                nodeid: node.id,
                flowid: node.z,
                hostname: os.hostname()
            };
            node.send(msg);
        });
    }
    RED.nodes.registerType("getflowid", getflowidnode);
};
