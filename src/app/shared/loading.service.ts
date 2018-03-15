import {Subject} from 'rxjs/Subject';
export class LoadingService {
  private _loading: boolean;
  loadingEvent = new Subject<boolean>();

  setLoading(value: boolean) {
    this._loading = value;
    this.loadingEvent.next(this._loading);
  }
}
