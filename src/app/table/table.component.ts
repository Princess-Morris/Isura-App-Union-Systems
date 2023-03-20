import { Component } from '@angular/core';
import { List } from './list.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
paragraph = "L";
idNumber = "US/SA/UAT/230100";


lists: List[] = [
  new List('Q', 'US/SA/UAT230100', 'test case', '17/01/2023', 'Sakobia', ['L','P'], 'Active'),
  new List('W', 'US/SA/UAT455790', 'archived', '18/01/2023', 'Sakobia', ['Q', 'U'], 'Acive'),
  new List('T', 'EU/WA/EAT756230', 'displayed', '20/01/2023', 'Sakowa',['K', 'A'], 'Active'),
  new List('E', 'GN/NW/GNT564700', 'shortlisted', '13/03/2023', 'Sakobia', ['T', 'C'], 'Active'),
  new List('G', 'WA/WT/WAT564700', 'welcome', '15/03/2023', 'Sakobia', ['T', 'A'], 'Active'),
  new List('W', 'US/SA/UAT455790', 'archived', '18/01/2023', 'Sakobia', ['Q', 'U'], 'Acive'),
  new List('E', 'GN/NW/GNT564700', 'shortlisted', '13/03/2023', 'Sakobia', ['T', 'C'], 'Active'),
  new List('W', 'US/SA/UAT455790', 'archived', '18/01/2023', 'Sakobia', ['Q', 'U'], 'Acive'),
  new List('T', 'EU/WA/EAT756230', 'displayed', '20/01/2023', 'Sakowa',['K', 'A'], 'Active'),
  new List('Q', 'US/SA/UAT230100', 'test case', '17/01/2023', 'Sakobia', ['L','P'], 'Active'),
  new List('E', 'GN/NW/GNT564700', 'shortlisted', '13/03/2023', 'Sakobia', ['T', 'C'], 'Active'),






 ];

}
