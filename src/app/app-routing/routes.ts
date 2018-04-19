import { Routes } from '@angular/router';

import { SnapshotComponent } from '../snapshot/snapshot.component';
import { RealtimeComponent } from '../realtime/realtime.component';

export const routes: Routes = [
  { path: 'noble-markets-order-book-snapshot',  component: SnapshotComponent },
  { path: 'noble-markets-realtime-order-book',     component: RealtimeComponent },
  { path: '', redirectTo: '/noble-markets-realtime-order-book', pathMatch: 'full' }
];
