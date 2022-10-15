import { Pipe,PipeTransform } from '@angular/core'


@Pipe({
    name:'EmployeeTitle'
})
export class employeeTitlePipe implements PipeTransform
{
        transform(value: string, gender: string):string {
            if(gender.toLowerCase() == 'male')
            {
                return 'Mr.'+value;
            }else{
                return 'Miss. '+value;
            }
        }
}