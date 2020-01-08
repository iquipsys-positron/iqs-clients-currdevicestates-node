import { IStringIdentifiable } from 'pip-services3-commons-node';

export class CurrentDeviceStateV1 implements IStringIdentifiable {
    public id: string;
    public org_id: string;
    public object_id?: string;
    public time: Date;
    public pos?: any;
    public alt?: number;
    public angle?: number;
    public speed?: number;
}