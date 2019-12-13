/*
  Gets Flow ID
*/
const os = require('os');
const RED2 = require.main.require('node-red');

module.exports = function (RED) {
    function getflowidnode(config) {
        RED.nodes.createNode(this, config);
        this.name = config.name;
        const node = this;
        node.on("input", function (msg) {
            const flow = RED2.nodes.getFlow(node.z);
            const flowname = flow ? flow.label : '';
            msg.flowinfo = {
                nodeid: node.id,
                flowid: node.z,
                hostname: os.hostname(),
                flowname
            };
            node.send(msg);
        });
    }
    RED.nodes.registerType("getflowid", getflowidnode);
};
