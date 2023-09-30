module.exports = class TodoDto {
  id;
  header;
  description;
  deadline;
  responsible;
  status;
  priority;

  constructor(model) {
    this.id = model.id;
    this.header = model.header;
    this.description = model.description;
    this.deadline = model.deadline;
    this.responsible = model.responsible;
    this.status = model.status;
    this.priority = model.priority;
  }
};
