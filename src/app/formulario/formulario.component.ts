import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  constructor(private postService: PostService, private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.minLength(5)]),
      texto: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      imagen: new FormControl(''),
      fecha: new FormControl(new Date().toLocaleDateString('en-CA'), [Validators.required]),
      categoria: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      this.postService.create(this.formulario.value);
      alert('¡Exito! Post creado.');
      this.router.navigate(['/blog']);
    }
  }

  checkError(controlName: string, error: string, touched: boolean): boolean | undefined {
    return touched ? this.formulario.get(controlName)?.hasError(error) && this.formulario.get(controlName)?.touched : this.formulario.get(controlName)?.hasError(error);
  }

}
