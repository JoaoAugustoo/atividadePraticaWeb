import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade-pratica-joao';
  data: Array<any>;constructor(){
    this.data = [
      { Name: 'JOÃO AUGUSTO', RUS: '3643230', CURSOS: 'TECNOLOGIA EM CÊNCIA DE DADOS',
       DN:'23/02/2003'},
      { Name: 'GUSTAVO OLIVEIRA', RUS: '3594852', CURSOS: 'ENGENHARIA DE SOFTWARE',
       DN:'18/10/2009'},
      { Name: 'FERNADO GALHARDO', RUS: '5638749', CURSOS: 'ANALISE E DESENVOLVIMENTO DE SISTEMAS',
       DN:'13/05/2001'},
      { Name: 'SOPHIA OLIVEIRA', RUS: '4259851', CURSOS: 'ENGENHARIA ELETRICA',
       DN:'17/12/2003'},
      { Name: 'EDUARDA NASCIMENTO', RUS: '3651295', CURSOS: 'SEGURANÇA DA INFORMAÇÃO',
       DN:'02/09/2004'},  
    ]; //Dados de Alunos Aleatórios
}
}
