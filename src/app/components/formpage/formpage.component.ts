import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryInterface } from 'src/app/common/models/country-interface';
import { CountriesService } from 'src/app/common/services/countries.service';
import { OccupationsService } from 'src/app/common/services/occupations.service';
import { ToastService } from 'src/app/common/services/toast.service';
import { ValidateEmail } from 'src/app/shared/email.validator';
import { ValidatePassword } from 'src/app/shared/password.validator';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.scss']
})
export class FormpageComponent implements OnInit {
  public dataForm !: FormGroup;
  searchable: boolean = false;
  disabled: boolean = false;
  eRadio: boolean = false;


  selectedCountry: string = '';
  selectedOccupation: string = '';

  countries: CountryInterface[] = [];

  occupations: string[] = [];

  toastType = '';
  toastTitle = '';
  message = '';
  showToast = false;
  progressPosition = 'bottom';
  time = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private countriesService: CountriesService,
    private occupationsService: OccupationsService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        ValidatePassword
      ],
      ],
      // pattern(/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/)],
      email: ['', {
        validators: [
          Validators.required,
          Validators.email,
          ValidateEmail
        ],
        updateOn: 'change',
      }],
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(13),
      ]],
      selectCountry: ['', Validators.required],
      selectOccupation: ['', Validators.required],
      successful: ['', Validators.required],
    })

    this.countriesService.getCountries().subscribe(
      (countries: CountryInterface[]) => {
        this.countries = countries;
      }
    )

    this.occupations = this.occupationsService.occupations;
  }

  onSubmit() {

    if (this.dataForm.get('successful')?.value == 'true') {
      this.toastType = 'success';
      this.toastTitle = 'Notification';
      this.message = 'Form successfully submitted!';
      this.showToast = true;
      // this.time = 5000;
      setTimeout(() => {
        this.router.navigate(['success']);
      }, 5000);
    }
    if (this.dataForm.get('successful')?.value == 'false' && this.dataForm.untouched != true) {
      this.toastType = 'error';
      this.toastTitle = 'Error';
      this.message = 'Form unsuccessful !';
      this.showToast = true;
      // this.time = 5000;
      // setTimeout(() => {
      //   this.router.navigate(['']);
      // }, 5000);
    }
    this.dataForm.reset();
  }
}


