let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { CurrentDeviceStateV1 } from './CurrentDeviceStateV1';
import { ICurrentDeviceStatesClientV1 } from './ICurrentDeviceStatesClientV1';

export class CurrentDeviceStatesLambdaClientV1 extends CommandableLambdaClient implements ICurrentDeviceStatesClientV1 {       

    constructor(config?: any) {
        super('curr_device_states');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CurrentDeviceStateV1>) => void): void {
        this.callCommand( 
            'get_states', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        this.callCommand(
            'get_state_by_id', 
            correlationId,
            {
                state_id: id
            }, 
            callback
        );
    }

    public setState(correlationId: string, orgId: string, state: CurrentDeviceStateV1, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        this.callCommand(
            'set_state', 
            correlationId,
            {
                state: state
            }, 
            callback
        );
    }

    public setStates(correlationId: string, orgId: string, states: CurrentDeviceStateV1[], 
        callback: (err: any) => void): void {
        this.callCommand(
            'set_states', 
            correlationId,
            {
                states: states
            }, 
            callback
        );
    }
    
    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        this.callCommand(
            'delete_states_by_filter', 
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        this.callCommand(
            'delete_state_by_id', 
            correlationId,
            {
                state_id: id
            }, 
            callback
        );
    }

}
