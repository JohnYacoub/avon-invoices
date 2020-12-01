const username = process.env.NAME;
const password = process.env.MYSQL_KEY;
const database = process.env.DATABASE;
const host = process.env.HOST;
const node_env = process.env.NODE_ENV;
const dialect = process.env.DIALECT;

const config = {
  development: {
    username,
    password,
    database,
    host,
    dialect,
  },
  test: {
    username,
    password,
    database,
    host,
    dialect,
  },
  production: {
    username,
    password,
    database,
    host,
    dialect,
  },
};

module.exports = config[node_env];