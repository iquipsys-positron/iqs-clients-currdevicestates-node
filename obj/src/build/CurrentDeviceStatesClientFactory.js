"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const CurrentDeviceStatesNullClientV1_1 = require("../version1/CurrentDeviceStatesNullClientV1");
const CurrentDeviceStatesMemoryClientV1_1 = require("../version1/CurrentDeviceStatesMemoryClientV1");
const CurrentDeviceStatesDirectClientV1_1 = require("../version1/CurrentDeviceStatesDirectClientV1");
const CurrentDeviceStatesHttpClientV1_1 = require("../version1/CurrentDeviceStatesHttpClientV1");
const CurrentDeviceStatesLambdaClientV1_1 = require("../version1/CurrentDeviceStatesLambdaClientV1");
const CurrentDeviceStatesHttpProxyClientV1_1 = require("../version1/CurrentDeviceStatesHttpProxyClientV1");
class CurrentDeviceStatesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(CurrentDeviceStatesClientFactory.NullClientV1Descriptor, CurrentDeviceStatesNullClientV1_1.CurrentDeviceStatesNullClientV1);
        this.registerAsType(CurrentDeviceStatesClientFactory.MemoryClientV1Descriptor, CurrentDeviceStatesMemoryClientV1_1.CurrentDeviceStatesMemoryClientV1);
        this.registerAsType(CurrentDeviceStatesClientFactory.DirectClientV1Descriptor, CurrentDeviceStatesDirectClientV1_1.CurrentDeviceStatesDirectClientV1);
        this.registerAsType(CurrentDeviceStatesClientFactory.HttpClientV1Descriptor, CurrentDeviceStatesHttpClientV1_1.CurrentDeviceStatesHttpClientV1);
        this.registerAsType(CurrentDeviceStatesClientFactory.LambdaClientV1Descriptor, CurrentDeviceStatesLambdaClientV1_1.CurrentDeviceStatesLambdaClientV1);
        this.registerAsType(CurrentDeviceStatesClientFactory.HttpProxyClientV1Descriptor, CurrentDeviceStatesHttpProxyClientV1_1.CurrentDeviceStatesHttpProxyClientV1);
    }
}
exports.CurrentDeviceStatesClientFactory = CurrentDeviceStatesClientFactory;
CurrentDeviceStatesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currdevicestates', 'factory', 'default', 'default', '1.0');
CurrentDeviceStatesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currdevicestates', 'client', 'null', 'default', '1.0');
CurrentDeviceStatesClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currdevicestates', 'client', 'memory', 'default', '1.0');
CurrentDeviceStatesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currdevicestates', 'client', 'direct', 'default', '1.0');
CurrentDeviceStatesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currdevicestates', 'client', 'http', 'default', '1.0');
CurrentDeviceStatesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currdevicestates', 'client', 'lambda', 'default', '1.0');
CurrentDeviceStatesClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-currdevicestates', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=CurrentDeviceStatesClientFactory.js.map