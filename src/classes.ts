class Department {
  protected employees: string[] = [];

  constructor(private readonly id: number, private title: string) {}

  describe(this: Department) {
    console.log(`This department is: ${this.title} with ID: ${this.id}`);
  }

  addEmployee(employeeName: string) {
    this.employees.push(employeeName);
    console.log(`Employees name are: ${this.employees}`);
  }
}

class ItDepartment extends Department {
  constructor(id: number, private admins: string[]) {
    super(id, 'IT');
  }

  addAdmins(adminName: string) {
    this.admins.push(adminName);
  }

  addEmployee(employeeName: string) {
    this.employees.push(employeeName);
  }
}

class Accounting extends Department {
  lastReport: string;
  static instance: Accounting;

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No reports found.');
  }

  set mostRecentReport(value) {
    if(!value) {
      throw new Error('Please set a valid value');
    }
    this.generateReport(value);
  }

  private constructor(id: number, private reports: string[]) {
    super(id, 'report');
    this.lastReport = this.reports[0];
  }

  static getInstance() {
    if(Accounting.instance) {
      return this.instance;
    }
    this.instance = new Accounting(1, []);
    return this.instance;
  }

  generateReport(message: string) {
    this.reports.push(message);
    this.lastReport = message;
  }

  getReport() {
    console.log(this.reports);
  }
}

const accounting = Accounting.getInstance();
const accounting2 = Accounting.getInstance();

console.log(accounting);
console.log(accounting2);

accounting.generateReport('New report');

console.log(accounting.mostRecentReport);

accounting.getReport();

accounting.mostRecentReport = 'SendGrid Report';

accounting.getReport();

const it = new ItDepartment(1, ['Vladimir']);

it.addEmployee('Anna');
it.addEmployee('Vlad');
it.addEmployee('Stas');

it.addAdmins('Anna');

it.addEmployee('Magic');

console.log(it);