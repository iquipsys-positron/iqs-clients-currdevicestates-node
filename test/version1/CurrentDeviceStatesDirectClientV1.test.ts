let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { CurrentDeviceStatesMemoryPersistence } from 'iqs-services-currdevicestates-node';
import { CurrentDeviceStatesController } from 'iqs-services-currdevicestates-node';
import { ICurrentDeviceStatesClientV1 } from '../../src/version1/ICurrentDeviceStatesClientV1';
import { CurrentDeviceStatesDirectClientV1 } from '../../src/version1/CurrentDeviceStatesDirectClientV1';
import { CurrentDeviceStatesClientFixtureV1 } from './CurrentDeviceStatesClientFixtureV1';

suite('CurrentDeviceStatesDirectClientV1', ()=> {
    let client: CurrentDeviceStatesDirectClientV1;
    let fixture: CurrentDeviceStatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CurrentDeviceStatesMemoryPersistence();
        let controller = new CurrentDeviceStatesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-currdevicestates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-currdevicestates', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new CurrentDeviceStatesDirectClientV1();
        client.setReferences(references);

        fixture = new CurrentDeviceStatesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
