import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterEmp"
})
export class FilterEmpPipe implements PipeTransform {
  transform(employees: any[], ...args: any[]): any {
    return employees.filter(emp => {
      return JSON.stringify(emp)
        .toString()
        .toLowerCase()
        .includes(args[0]);
    });
  }
}
