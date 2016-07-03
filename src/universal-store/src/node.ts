import {NodeBackend} from './backend/node-backend';
import {Store, StoreBackend} from './store';

import {provide} from '@angular/core';

export const NODE_STORE_PROVIDERS = [
  NodeBackend,
  provide(StoreBackend, {useClass: NodeBackend}),
  Store
];
