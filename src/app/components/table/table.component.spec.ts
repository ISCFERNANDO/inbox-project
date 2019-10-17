import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

fdescribe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    let clientes = [
      {
        id: 1,
        fullName: 'Luis Fernando',
        email: 'iscluis@hotmail.com',
        age: 22
      },
      {
        id: 2,
        fullName: 'Luis Fernando',
        email: 'iscluis@hotmail.com',
        age: 22
      },
      {
        id: 3,
        fullName: 'Luis Fernando',
        email: 'iscluis@hotmail.com',
        age: 22
      },
      {
        id: 4,
        fullName: 'Luis Fernando',
        email: 'iscluis@hotmail.com',
        age: 22
      }
    ]
    ;
    
    component = fixture.componentInstance;
    component.clientes = clientes;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  
  fit('should be an arrangement', () => {
    let clientes = [
      {
        id: 1,
        fullName: 'Luis Fernando',
        email: 'iscluis@hotmail.com',
        age: 22
      },
      {
        id: 2,
        fullName: 'Luis Fernando',
        email: 'iscluis@hotmail.com',
        age: 22
      },
      {
        id: 3,
        fullName: 'Luis Fernando',
        email: 'iscluis@hotmail.com',
        age: 22
      },
      {
        id: 4,
        fullName: 'Luis Fernando',
        email: 'iscluis@hotmail.com',
        age: 22
      }
    ];

    expect(component.clientes).toEqual(clientes);
  })


});
