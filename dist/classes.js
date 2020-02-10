"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, title) {
        this.id = id;
        this.title = title;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("This department is: " + this.title + " with ID: " + this.id);
    };
    Department.prototype.addEmployee = function (employeeName) {
        this.employees.push(employeeName);
        console.log("Employees name are: " + this.employees);
    };
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ItDepartment.prototype.addAdmins = function (adminName) {
        this.admins.push(adminName);
    };
    ItDepartment.prototype.addEmployee = function (employeeName) {
        this.employees.push(employeeName);
    };
    return ItDepartment;
}(Department));
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(id, reports) {
        var _this = _super.call(this, id, 'report') || this;
        _this.reports = reports;
        _this.lastReport = _this.reports[0];
        return _this;
    }
    Object.defineProperty(Accounting.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No reports found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please set a valid value');
            }
            this.generateReport(value);
        },
        enumerable: true,
        configurable: true
    });
    Accounting.getInstance = function () {
        if (Accounting.instance) {
            return this.instance;
        }
        this.instance = new Accounting(1, []);
        return this.instance;
    };
    Accounting.prototype.generateReport = function (message) {
        this.reports.push(message);
        this.lastReport = message;
    };
    Accounting.prototype.getReport = function () {
        console.log(this.reports);
    };
    return Accounting;
}(Department));
var accounting = Accounting.getInstance();
var accounting2 = Accounting.getInstance();
console.log(accounting);
console.log(accounting2);
accounting.generateReport('New report');
console.log(accounting.mostRecentReport);
accounting.getReport();
accounting.mostRecentReport = 'SendGrid Report';
accounting.getReport();
var it = new ItDepartment(1, ['Vladimir']);
it.addEmployee('Anna');
it.addEmployee('Vlad');
it.addEmployee('Stas');
it.addAdmins('Anna');
it.addEmployee('Magic');
console.log(it);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHRSxvQkFBNkIsRUFBVSxFQUFVLEtBQWE7UUFBakMsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFGcEQsY0FBUyxHQUFhLEVBQUUsQ0FBQztJQUU4QixDQUFDO0lBRWxFLDZCQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixJQUFJLENBQUMsS0FBSyxrQkFBYSxJQUFJLENBQUMsRUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxZQUFvQjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixJQUFJLENBQUMsU0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFFRDtJQUEyQixnQ0FBVTtJQUNuQyxzQkFBWSxFQUFVLEVBQVUsTUFBZ0I7UUFBaEQsWUFDRSxrQkFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQ2hCO1FBRitCLFlBQU0sR0FBTixNQUFNLENBQVU7O0lBRWhELENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsU0FBaUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxZQUFvQjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBMkIsVUFBVSxHQVlwQztBQUVEO0lBQXlCLDhCQUFVO0lBa0JqQyxvQkFBb0Is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