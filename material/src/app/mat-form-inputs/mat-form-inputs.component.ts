import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-mat-form-inputs',
    templateUrl: './mat-form-inputs.component.html',
    styleUrls: ['./mat-form-inputs.component.css']
})
export class MatFormInputsComponent implements OnInit {
    optionsFormGroup = new FormGroup({
        hideRequiredControl: new FormControl(),
        floatLabelControl: new FormControl(),
    });
    options = ['option 1', 'option 2', 'option 3'];
    someControl = new FormControl('', Validators.required);
    constructor() { }

    ngOnInit(): void {
    }
}
