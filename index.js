const todayYear = new Date().getFullYear();
class Employee {
  constructor(
    firstName,
    lastName,
    phoneNum,
    position,
    edu,
    yearOfEmployment,
    yearOfDismissal
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNum = phoneNum;
    this.position = position;
    this.edu = edu;
    this.yearOfEmployment = yearOfEmployment;
    this.yearOfDismissal = yearOfDismissal;
  }
  get position() {
    return this._position;
  }
  set position(value) {
    if (
      ["Manager", "JSDeveloper", "QA", "ReactDeveloper", "DevOps"].includes(
        value
      )
    )
      this._position = value;
    else this._position = null;
  }

  get yearOfEmployment() {
    this.position;
  }
  set yearOfEmployment(value) {
    if (value > todayYear) this._yearOfEmployment = null;
    else this._yearOfEmployment = value;
  }
  get yearOfDismissal() {
    this.position;
  }
  set yearOfDismissal(value) {
    if (value > todayYear) this.yearOfDismissal = null;
    else this._yearOfDismissal = value;
  }
}
const manag = new Employee(
  "Misha",
  "Panivnyk",
  3809616454756,
  "ReactDeveloper",
  "Soft",
  2016,
  2022
);
console.log(manag);

class Personnel {
  constructor(lastName) {
    this.lastName = lastName;
  }
}
class RemotePersonnel extends Personnel {
  constructor(lastName, schedule) {
    super(lastName);
    this.monday = schedule.monday;
    this.tuesday = schedule.tyesday;
    this.wednesday = schedule.wednesday;
    this.thursday = schedule.thursday;
    this.friday = schedule.friday;
    this.saturday = schedule.saturday;
    this.sunday = schedule.sunday;
  }
}
const remote = new RemotePersonnel("Panivnyk", {
  monday: "9:00 - 17:00",
  tuesday: "9:00 - 17:00",
  wednesday: "9:00 - 17:00",
  thursday: "9:00 - 17:00",
  friday: "9:00 - 17:00",
  saturday: "15:00 - 17:00",
  sunday: "16:00 - 17:00",
});
console.log(remote);
