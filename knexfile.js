// Update with your config settings.

const defaultConfig = ( env ) => {

  const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/metro-rail-${env}`

  return {

    client: 'postgresql',
    connection: connectionString,
    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      directory: __dirname + '/db/migrations',
      tableName: 'migrations'
    },

    seeds: {
      directory: __dirname + `/db/seeds/${env}`
    }
  }
}

module.exports = {
  test: defaultConfig( 'test' ),
  development: defaultConfig( 'development' ),
  production: defaultConfig( 'production' )
}
