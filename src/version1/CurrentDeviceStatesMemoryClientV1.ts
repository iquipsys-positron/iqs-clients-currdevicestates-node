let _ = require('lodash');

import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ICurrentDeviceStatesClientV1 } from './ICurrentDeviceStatesClientV1';
import { CurrentDeviceStateV1 } from './CurrentDeviceStateV1';

export class CurrentDeviceStatesMemoryClientV1 implements ICurrentDeviceStatesClientV1 {
    private _items: CurrentDeviceStateV1[] = [];

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        
        let id = filter.getAsNullableString('id');
        let ids = filter.getAsObject('ids');
        let orgId = filter.getAsNullableString('org_id');
        let fromTime = filter.getAsNullableDateTime('from_time');
        let toTime = filter.getAsNullableDateTime('to_time');
                
        // Process ids filter
        if (_.isString(ids))
            ids = ids.split(',');
        if (!_.isArray(ids))
            ids = null;
        
        return (item) => {
            if (id && item.id != id) 
                return false;
            if (ids && _.indexOf(ids, item.id) < 0)
                return false;
            if (orgId && item.org_id != orgId) 
                return false;
            if (fromTime && item.time < fromTime) 
                return false;
            if (toTime && item.time >= toTime) 
                return false;
            return true; 
        };
    }
            
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CurrentDeviceStateV1>) => void): void {

        let filterCurl = this.composeFilter(filter);
        let states = _.filter(this._items, filterCurl);

        callback(null, new DataPage<CurrentDeviceStateV1>(states, states.length));
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {

        let state = _.find(this._items, (item) => item.id == id);

        callback(null, state);
    }

    public setState(correlationId: string, orgId: string, state: CurrentDeviceStateV1, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {

        _.remove(this._items, (item) => item.id == state.id);
        this._items.push(state);

        callback(null, state);
    }

    public setStates(correlationId: string, orgId: string, states: CurrentDeviceStateV1[], 
        callback: (err: any) => void): void {

        for (let state of states) {
            _.remove(this._items, (item) => item.id == state.id);
            this._items.push(state);
        }

        if (callback) callback(null);
    }
    
    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        let filterCurl = this.composeFilter(filter);

        _.remove(this._items, filterCurl);

        callback(null);
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {

        let item = _.find(this._items, (item) => item.id == id);
        _.remove(this._items, (item) => item.id == id);

        if (callback) callback(null, item);
    }

}