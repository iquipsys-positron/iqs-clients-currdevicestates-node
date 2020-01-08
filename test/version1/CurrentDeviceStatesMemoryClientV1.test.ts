let assert = require('chai').assert;
let async = require('async');

import { ICurrentDeviceStatesClientV1 } from '../../src/version1/ICurrentDeviceStatesClientV1';
import { CurrentDeviceStatesMemoryClientV1 } from '../../src/version1/CurrentDeviceStatesMemoryClientV1';
import { CurrentDeviceStatesClientFixtureV1 } from './CurrentDeviceStatesClientFixtureV1';

suite('CurrentDeviceStatesMemoryClientV1', ()=> {
    let client: CurrentDeviceStatesMemoryClientV1;
    let fixture: CurrentDeviceStatesClientFixtureV1;

    setup(() => {
        client = new CurrentDeviceStatesMemoryClientV1();
        fixture = new CurrentDeviceStatesClientFixtureV1(client);
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
