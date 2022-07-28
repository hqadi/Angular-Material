import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    nameControl = new FormControl('');
    nameControl2 = new FormControl('');
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions!: Observable<string[]>;
    hidden = true;
    fontStyle = '';
    fontStyleControl = new FormControl('');
    longText = 'text text text text text text text text text text text text';
    range = new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
    });
    date = new Date();
    vertical = true;

    ngOnInit(): void {
        this.filteredOptions = this.nameControl.valueChanges.pipe(
            startWith(''),
            map(value => this.filter(value)),
        );
    }

    filter(value: string): string[] {
        return this.options
            .filter(option => option.toLowerCase().includes(value.toLowerCase()));
    }

    toggleBadge(): void {
        this.hidden = !this.hidden;
    }
}
