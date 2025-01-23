const dbConfig = {
  sqlite: {
    client: 'sqlite',
    connection: {
      filename: '.tmp/data.db',
    },
    useNullAsDefault: true,
  },
  postgres: {
    client: 'postgres',
    connection: {
      database: process.env.DATABASE_NAME || 'strapi',
      user: process.env.DATABASE_USERNAME || 'strapi',
      password: process.env.DATABASE_PASSWORD || 'strapi',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      host: process.env.DATABASE_HOST || 'localhost',
    },
  },
  mysql: {
    client: 'mysql',
    connection: {
      database: process.env.DATABASE_NAME || 'strapi',
      user: process.env.DATABASE_USERNAME || 'strapi',
      password: process.env.DATABASE_PASSWORD || 'strapi',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      host: process.env.DATABASE_HOST || 'localhost',
    },

  },
  mariadb: {
    client: 'mysql',
    connection: {
      database: process.env.DATABASE_NAME || 'strapi',
      user: process.env.DATABASE_USERNAME || 'strapi',
      password: process.env.DATABASE_PASSWORD || 'strapi',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3307,
      host: process.env.DATABASE_HOST || 'localhost',
    },
  },
};

module.exports = {
  connection: process.env.DB ? dbConfig[process.env.DB] || dbConfig.sqlite : dbConfig.sqlite,

};
