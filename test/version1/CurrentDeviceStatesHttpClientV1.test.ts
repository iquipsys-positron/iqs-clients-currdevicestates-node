let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { CurrentDeviceStatesMemoryPersistence } from 'iqs-services-currdevicestates-node';
import { CurrentDeviceStatesController } from 'iqs-services-currdevicestates-node';
import { CurrentDeviceStatesHttpServiceV1 } from 'iqs-services-currdevicestates-node';
import { ICurrentDeviceStatesClientV1 } from '../../src/version1/ICurrentDeviceStatesClientV1';
import { CurrentDeviceStatesHttpClientV1 } from '../../src/version1/CurrentDeviceStatesHttpClientV1';
import { CurrentDeviceStatesClientFixtureV1 } from './CurrentDeviceStatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('CurrentDeviceStatesHttpClientV1', ()=> {
    let service: CurrentDeviceStatesHttpServiceV1;
    let client: CurrentDeviceStatesHttpClientV1;
    let fixture: CurrentDeviceStatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CurrentDeviceStatesMemoryPersistence();
        let controller = new CurrentDeviceStatesController();

        service = new CurrentDeviceStatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-currdevicestates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-currdevicestates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-currdevicestates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new CurrentDeviceStatesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new CurrentDeviceStatesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
