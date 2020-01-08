import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { CurrentDeviceStatesNullClientV1 } from '../version1/CurrentDeviceStatesNullClientV1';
import { CurrentDeviceStatesMemoryClientV1 } from '../version1/CurrentDeviceStatesMemoryClientV1';
import { CurrentDeviceStatesDirectClientV1 } from '../version1/CurrentDeviceStatesDirectClientV1';
import { CurrentDeviceStatesHttpClientV1 } from '../version1/CurrentDeviceStatesHttpClientV1';
import { CurrentDeviceStatesLambdaClientV1 } from '../version1/CurrentDeviceStatesLambdaClientV1';
import { CurrentDeviceStatesHttpProxyClientV1 } from '../version1/CurrentDeviceStatesHttpProxyClientV1';

export class CurrentDeviceStatesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-currdevicestates', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-currdevicestates', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-currdevicestates', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-currdevicestates', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-currdevicestates', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-currdevicestates', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('iqs-services-currdevicestates', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(CurrentDeviceStatesClientFactory.NullClientV1Descriptor, CurrentDeviceStatesNullClientV1);
		this.registerAsType(CurrentDeviceStatesClientFactory.MemoryClientV1Descriptor, CurrentDeviceStatesMemoryClientV1);
		this.registerAsType(CurrentDeviceStatesClientFactory.DirectClientV1Descriptor, CurrentDeviceStatesDirectClientV1);
		this.registerAsType(CurrentDeviceStatesClientFactory.HttpClientV1Descriptor, CurrentDeviceStatesHttpClientV1);
		this.registerAsType(CurrentDeviceStatesClientFactory.LambdaClientV1Descriptor, CurrentDeviceStatesLambdaClientV1);
		this.registerAsType(CurrentDeviceStatesClientFactory.HttpProxyClientV1Descriptor, CurrentDeviceStatesHttpProxyClientV1);
	}
	
}
