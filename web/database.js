//mysql client for node.js,provides support for promises
import mysql from "mysql2";

//creates connection pool, it contains connection details
//and it calls promise for the operation and awaits response to use async await
const pool = mysql
  .createPool({
    host: "mysql",
    user: "root",
    password: "root",
    database: "cloud",
  })
  .promise();

/*await is used to execute a sql query on connection pool
the result is extracted in result array */
export async function getInfo() {
  try {
    const [result] = await pool.query("SELECT * FROM students");
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const info = await getInfo();
console.log(info);
