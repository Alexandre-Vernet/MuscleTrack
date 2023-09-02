import { Component, OnInit } from '@angular/core';
import { ToastService } from "./toast.service";
import { Toast } from "./toast";

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
    toast: Toast = {
        message: '',
        duration: 0
    };

    constructor(
        private readonly toastService: ToastService,
    ) {
    }

    ngOnInit() {
        // Listen for notifications
        this.toastService
            .message
            .subscribe((toast) => {
                this.toast = toast;
                document.getElementById('open-toast').click();
            });
    }
}
