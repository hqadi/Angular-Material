import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-checkboxes',
    templateUrl: './checkboxes.component.html',
    styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
    task = {
        name: 'Indeterminate',
        completed: false,
        color: 'primary',
        subtasks: [
            { name: 'Primary', completed: false, color: 'primary'},
            { name: 'Accent', completed: false, color: 'accent'},
            { name: 'Warn', completed: false, color: 'warn'},
        ],
    };
    allCompleted = false;
    form = new FormGroup({
        control1: new FormControl(false),
        control2: new FormControl(),
        control3: new FormControl(),
    });

    constructor() { }

    ngOnInit(): void {
        console.log('app checkboxes initialized.');
    }

    setAll(completed: boolean): void {
        this.allCompleted = completed;
        this.task.subtasks.forEach(subtask => {
            subtask.completed = completed;
        })
    }

    someCompleted(): boolean {
        return !!this.task.subtasks.filter(subtasks => subtasks.completed).length && !this.allCompleted;
    }

    updateAllCompleted(): void {
        this.allCompleted = this.task.subtasks.every(subtasks => subtasks.completed);
    }
}
