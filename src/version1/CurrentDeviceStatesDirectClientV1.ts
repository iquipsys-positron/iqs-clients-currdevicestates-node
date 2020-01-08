import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ICurrentDeviceStatesClientV1 } from './ICurrentDeviceStatesClientV1';
//import { ICurrentDeviceStatesController } from 'iqs-services-currdevicestates-node';
import { CurrentDeviceStateV1 } from './CurrentDeviceStateV1';

export class CurrentDeviceStatesDirectClientV1 extends DirectClient<any> implements ICurrentDeviceStatesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-currdevicestates", "controller", "*", "*", "*"))
    }

    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CurrentDeviceStateV1>) => void): void {
        let timing = this.instrument(correlationId, 'states.get_states');
        this._controller.getStates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        let timing = this.instrument(correlationId, 'states.get_state_by_id');
        this._controller.getStateById(correlationId, id, (err, state) => {
            timing.endTiming();
            callback(err, state);
        });
    }

    public setState(correlationId: string, orgId: string, state: CurrentDeviceStateV1, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        let timing = this.instrument(correlationId, 'states.set_state');
        this._controller.setState(correlationId, state, (err, state) => {
            timing.endTiming();
            callback(err, state);
        });
    }

    public setStates(correlationId: string, orgId: string, states: CurrentDeviceStateV1[], 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'states.set_states');
        this._controller.setStates(correlationId, states, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    
    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'states.delete_states_by_filter');
        this._controller.deleteStatesByFilter(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        let timing = this.instrument(correlationId, 'states.delete_state_by_id');
        this._controller.deleteStateById(correlationId, id, (err, state) => {
            timing.endTiming();
            callback(err, state);
        });
    }

}