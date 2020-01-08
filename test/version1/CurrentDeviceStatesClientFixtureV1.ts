let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { CurrentDeviceStateV1 } from '../../src/version1/CurrentDeviceStateV1';
import { ICurrentDeviceStatesClientV1 } from '../../src/version1/ICurrentDeviceStatesClientV1';

let STATE1: CurrentDeviceStateV1 = {
    id: '1-1',
    org_id: '1',
    object_id: '1',
    time: new Date()
};
let STATE2: CurrentDeviceStateV1 = {
    id: '1-2',
    org_id: '1',
    time: new Date()
};

export class CurrentDeviceStatesClientFixtureV1 {
    private _client: ICurrentDeviceStatesClientV1;
    
    constructor(client: ICurrentDeviceStatesClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let state1, state2: CurrentDeviceStateV1;

        async.series([
        // Create one state
            (callback) => {
                this._client.setState(
                    null, '1', STATE1,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isObject(state);
                        assert.equal(state.org_id, STATE1.org_id);

                        state1 = state;

                        callback();
                    }
                );
            },
        // Create another state
            (callback) => {
                this._client.setState(
                    null, '1', STATE2,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isObject(state);
                        assert.equal(state.org_id, STATE2.org_id);

                        state2 = state;

                        callback();
                    }
                );
            },
        // Get all states
            (callback) => {
                this._client.getStates(
                    null, '1', null, new PagingParams(0,5,false),
                    (err, states) => {
                        assert.isNull(err);

                        assert.isObject(states);
                        assert.isTrue(states.data.length >= 2);

                        callback();
                    }
                );
            },
        // Delete state
            (callback) => {
                this._client.deleteStateById(
                    null, '1', state1.id,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isNotNull(state);
                        assert.equal(state.id, state1.id);

                        callback();
                    }
                )
            },
        // Try to get deleted state by id
            (callback) => {
                this._client.getStateById(
                    null, '1', state1.id,
                    (err, state) => {
                        assert.isNull(err);

                        assert.isNull(state || null);

                        callback();
                    }
                )
            }
        ], done);
    }
}
