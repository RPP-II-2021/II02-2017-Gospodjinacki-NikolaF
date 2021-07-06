import { Status } from './status.model';
import { Departman } from './departman.model'

export class Student{
  id: number;
  ime: string;
  prezime: string;
  brojIndeksa: string;
  status: Status;
  departman: Departman;
}
