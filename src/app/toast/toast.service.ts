import { EventEmitter, Injectable } from '@angular/core';
import { Toast } from './toast';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor() {
    }

    message = new EventEmitter<Toast>();

    showToast(message: string, duration: number = 5000) {
        this.message.emit({
            message,
            duration
        });
    }
}
