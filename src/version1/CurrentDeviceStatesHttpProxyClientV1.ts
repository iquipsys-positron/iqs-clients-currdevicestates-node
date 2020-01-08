import { ConfigParams } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { CurrentDeviceStateV1 } from './CurrentDeviceStateV1';
import { ICurrentDeviceStatesClientV1 } from './ICurrentDeviceStatesClientV1';
import { CurrentDeviceStatesHttpClientV1 } from './CurrentDeviceStatesHttpClientV1';

export class CurrentDeviceStatesHttpProxyClientV1 extends ClustersProxyHttpClientV1<ICurrentDeviceStatesClientV1>
    implements ICurrentDeviceStatesClientV1 {       
    
    constructor(config?: any) {
        super(CurrentDeviceStatesHttpClientV1, 'iqs-services-currdevicestates', 30020);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CurrentDeviceStateV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getStates(correlationId, orgId, filter, paging, callback);
        });
    }

    public getStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getStateById(correlationId, orgId, id, callback);
        });
    }

    public setState(correlationId: string, orgId: string, state: CurrentDeviceStateV1, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.setState(correlationId, orgId, state, callback);
        });
    }

    public setStates(correlationId: string, orgId: string, states: CurrentDeviceStateV1[], 
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.setStates(correlationId, orgId, states, callback);
        });
    }
    
    public deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.deleteStatesByFilter(correlationId, orgId, filter, callback);
        });
    }

    public deleteStateById(correlationId: string, orgId: string, id: string, 
        callback: (err: any, state: CurrentDeviceStateV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.deleteStateById(correlationId, orgId, id, callback);
        });
    }

}
