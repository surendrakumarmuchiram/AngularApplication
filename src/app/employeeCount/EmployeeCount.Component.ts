import { Component,Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector:'employee-count',
    templateUrl:'./EmployeeCount.Component.html',
    styleUrls:['./EmployeeCount.Component.css']
})
export class EmployeeCountComponent
{
    @Input()
    all:number;

    @Input()
    male:number;

    @Input()
    female:number;

    selectedRadioButtonValue:string='All';

    @Output()
    countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();
    
    onRadioButtonSelectionChange(){
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
}