import { Subject } from "rxjs";
import { ModalService } from "src/app/core/modal.service";

export class ModalRef<T> {

    private _onClose$ = new Subject<any>();

    constructor(private _modalService: ModalService){
    }

    onClose(){
        return this._onClose$.asObservable();
    }

    close(data?: any){
        this._onClose$.next(data);
        this._modalService.close();
    }
}