require('dotenv').config();

module.exports = {
  
  //Configuracion DB
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "database_development",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT ||"mysql",
  

    //Configurar Seeds
    seederStorage: "sequelize",
    seedersStorageTableName: "seeds",

    //Configuracion de Migrations
    migrationStorage: "sequelize",
    migrationsStorageTableName: "migrations"

}

