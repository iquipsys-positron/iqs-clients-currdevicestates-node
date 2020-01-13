import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';
import { CurrentDeviceStateV1 } from './CurrentDeviceStateV1';
import { ICurrentDeviceStatesClientV1 } from './ICurrentDeviceStatesClientV1';
export declare class CurrentDeviceStatesHttpProxyClientV1 extends ClustersProxyHttpClientV1<ICurrentDeviceStatesClientV1> implements ICurrentDeviceStatesClientV1 {
    constructor(config?: any);
    getStates(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<CurrentDeviceStateV1>) => void): void;
    getStateById(correlationId: string, orgId: string, id: string, callback: (err: any, state: CurrentDeviceStateV1) => void): void;
    setState(correlationId: string, orgId: string, state: CurrentDeviceStateV1, callback: (err: any, state: CurrentDeviceStateV1) => void): void;
    setStates(correlationId: string, orgId: string, states: CurrentDeviceStateV1[], callback: (err: any) => void): void;
    deleteStatesByFilter(correlationId: string, orgId: string, filter: FilterParams, callback: (err: any) => void): void;
    deleteStateById(correlationId: string, orgId: string, id: string, callback: (err: any, state: CurrentDeviceStateV1) => void): void;
}
