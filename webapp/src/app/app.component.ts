import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webapp';

  form: FormGroup;
  persons : any[] = [];

  constructor( formBuilder: FormBuilder, private client: HttpClient) {
    this.form = formBuilder.group({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl()
    });
    this.list();
  }

    save()
    {
      this.client.post<any>('http://localhost:9090/person', this.form.value).subscribe(
        r1 =>{
        console.log(r1);
        this.list();
        this.form.reset();
    });
    }
    list()
    {
      this.client.get<any>('http://localhost:9090/person') .subscribe(
        r1 =>{
        this.persons = r1;
    });
    }
    edit(id: any)
    {
      this.client.get<any>('http://localhost:9090/person/' + id) .subscribe(
        r1 =>{
          this.form.setValue(r1);
    });
    }

    delete(id: any)
    {
      this.client.delete<any>('http://localhost:9090/person/' + id) .subscribe(
        r1 =>{
          console.log(id);
          this.list();
    });
    }
}
