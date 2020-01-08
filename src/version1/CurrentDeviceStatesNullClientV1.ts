import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ICurrentDeviceStatesClientV1 } from './ICurrentDeviceStatesClientV1';
import { CurrentDeviceStateV1 } from './CurrentDeviceStateV1';

export class CurrentDeviceStatesNullClientV1 implements ICurrentDeviceStatesClientV1 {
            
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CurrentDeviceStateV1>) => void): void {
        callback(null, new DataPage<CurrentDeviceStateV1>([], 0));
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        callback(null, null);
    }

    public setState(correlationId: string, orgId: string, state: CurrentDeviceStateV1, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        callback(null, state);
    }

    public setStates(correlationId: string, orgId: string, states: CurrentDeviceStateV1[], 
        callback: (err: any) => void): void {
        callback(null);
    }
    
    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        if (callback) callback(null, null);
    }

}