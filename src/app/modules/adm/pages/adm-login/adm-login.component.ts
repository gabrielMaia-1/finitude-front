import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinApiService } from 'src/app/core/fin-api.service';
import { ModalService } from 'src/app/core/modal.service';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'fin-login',
  templateUrl: './adm-login.component.html',
  styleUrls: ['./adm-login.component.css']
})
export class AdmLoginComponent implements OnInit {

  constructor(private _api: FinApiService,
              private _router: Router) { }

  ngOnInit(): void {  }

  onSubmit(form: any){
    this._api.login(form.login,form.senha).subscribe(res => {
      this._router.navigateByUrl('adm')
    })
  }

}
