"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class CurrentDeviceStatesLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('curr_device_states');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getStates(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_states', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getStateById(correlationId, orgId, id, callback) {
        this.callCommand('get_state_by_id', correlationId, {
            state_id: id
        }, callback);
    }
    setState(correlationId, orgId, state, callback) {
        this.callCommand('set_state', correlationId, {
            state: state
        }, callback);
    }
    setStates(correlationId, orgId, states, callback) {
        this.callCommand('set_states', correlationId, {
            states: states
        }, callback);
    }
    deleteStatesByFilter(correlationId, orgId, filter, callback) {
        this.callCommand('delete_states_by_filter', correlationId, {
            filter: filter
        }, callback);
    }
    deleteStateById(correlationId, orgId, id, callback) {
        this.callCommand('delete_state_by_id', correlationId, {
            state_id: id
        }, callback);
    }
}
exports.CurrentDeviceStatesLambdaClientV1 = CurrentDeviceStatesLambdaClientV1;
//# sourceMappingURL=CurrentDeviceStatesLambdaClientV1.js.map