import fs from "fs";
class Db {
  private rows = [];
  private columns = [];
  constructor() {
    let rowBuffer = fs.readFileSync(__dirname + "/rows.json");
    let columnBuffer = fs.readFileSync(__dirname + "/columns.json");
    this.rows = JSON.parse(rowBuffer.toString());
    this.columns = JSON.parse(columnBuffer.toString());
  }

  saveRows() {
    fs.writeFileSync(__dirname + "/rows.json", JSON.stringify(this.rows));
  }

  saveColumns() {
    fs.writeFileSync(__dirname + "/columns.json", JSON.stringify(this.columns));
  }

  getColumns() {
    return this.columns;
  }
  
  getRows() {
    return this.rows;
  }
}
const db_instance = new Db();
export default db_instance;
