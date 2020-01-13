"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class CurrentDeviceStatesNullClientV1 {
    getStates(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getStateById(correlationId, orgId, id, callback) {
        callback(null, null);
    }
    setState(correlationId, orgId, state, callback) {
        callback(null, state);
    }
    setStates(correlationId, orgId, states, callback) {
        callback(null);
    }
    deleteStatesByFilter(correlationId, orgId, filter, callback) {
        if (callback)
            callback(null);
    }
    deleteStateById(correlationId, orgId, id, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.CurrentDeviceStatesNullClientV1 = CurrentDeviceStatesNullClientV1;
//# sourceMappingURL=CurrentDeviceStatesNullClientV1.js.map