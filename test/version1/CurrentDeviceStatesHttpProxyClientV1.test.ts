let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';

import { CurrentDeviceStatesMemoryPersistence } from 'iqs-services-currdevicestates-node';
import { CurrentDeviceStatesController } from 'iqs-services-currdevicestates-node';
import { CurrentDeviceStatesHttpServiceV1 } from 'iqs-services-currdevicestates-node';
import { ICurrentDeviceStatesClientV1 } from '../../src/version1/ICurrentDeviceStatesClientV1';
import { CurrentDeviceStatesHttpProxyClientV1 } from '../../src/version1/CurrentDeviceStatesHttpProxyClientV1';
import { CurrentDeviceStatesClientFixtureV1 } from './CurrentDeviceStatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'organizations',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'iqs-services-currdevicestates': 3000 
    },
    active_tenants: ['1']
}

suite('CurrentDeviceStatesHttpProxyClientV1', ()=> {
    let service: CurrentDeviceStatesHttpServiceV1;
    let client: CurrentDeviceStatesHttpProxyClientV1;
    let fixture: CurrentDeviceStatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CurrentDeviceStatesMemoryPersistence();
        let controller = new CurrentDeviceStatesController();

        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        service = new CurrentDeviceStatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('iqs-services-currdevicestates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-currdevicestates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-currdevicestates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new CurrentDeviceStatesHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new CurrentDeviceStatesClientFixtureV1(client);

        service.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
