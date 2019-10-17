# InboxTableProject

A library for show data in table

## Installation

npm install inbox-table --save

## Usage
Import in module app
// Import library module
import { InboxTableModule } from "inbox-table";
 
@NgModule({
  imports: [
    // ...
    InboxTableModule
  ]
})
export class AppModule {}

<app-table [clientes]="clientes"></app-table>