import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AgeValidator } from  '../../validators/age';
import { UsernameValidator } from  '../../validators/username';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('signupSlider') signupSlider: any;

    slideOneForm: FormGroup;
    slideTwoForm: FormGroup;
    slideThreeForm: FormGroup;

    submitAttempt: boolean = false;

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
      this.slideOneForm = formBuilder.group({
          firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          email: ['', Validators.required],
          age: ['', Validators.required],
          cpf: ['', Validators.required],
          ddd: ['', Validators.required],
          telefone: ['', Validators.required]
      });

      this.slideTwoForm = formBuilder.group({
          category: ['', Validators.required]
      });

      this.slideThreeForm = formBuilder.group({
        descricao: ['']
      });
    }

    next(){
        this.signupSlider.slideNext();
    }

    prev(){
        this.signupSlider.slidePrev();
    }

    save(){

        this.submitAttempt = true;

        if(!this.slideOneForm.valid){
            this.signupSlider.slideTo(0);
        }
        else if(!this.slideTwoForm.valid){
            this.signupSlider.slideTo(1);
        }
        else {
            console.log("success!")
            console.log(this.slideOneForm.value);
            console.log(this.slideTwoForm.value);
        }

    }

}
