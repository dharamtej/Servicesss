import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollServiceService } from '../enroll-service.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  topics=["Telugu","Hindi","English"];
  topichaserror=true;
 usermodel =new User('Sravan','sravk1998@gmail.com',9991249899,'Telugu');
  constructor(public _service:EnrollServiceService) { }

  ngOnInit(): void {
  }
  Func(value)
  {
    if(value=='default')
    {
      this.topichaserror=true;
    }
    else
    {
      this.topichaserror=false;
    }
  }
  Submit()
  {
    this._service.Enroll(this.usermodel)
        .subscribe(
          data=> console.log("sucess",data)
         
    );
  }

}
