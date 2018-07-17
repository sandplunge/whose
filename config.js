var cfg = {};

cfg.env = 'localDevelopment';
cfg.atlasPW = process.env.ATLAS_PASSWORD;
cfg.mongoOptions = '?useNewUrlParser=true';

cfg.localDevelopment = {
  app: {
    port: 3000
  },
  // localhost MongoDB 
  db: {
    port: 27017,
    connectString: 'mongodb://localhost/whose'
  }
};

cfg.awsStaging = {
  app: {
    port: 3000
  },
  // MongoDB local @ EC2 instance
  db: {
    port: 27017,
    connectString: 'mongodb://localhost/whose'
  }
};

cfg.awsProduction= {
  app: {
    port: 80
  },
  // Atlas Cloud DB
  db: {
    connectString: 'mongodb+srv://sandplunge:' + cfg.atlasPW + '@mongodev-pa5k3.mongodb.net/whose?retryWrites=true'
  }
};

module.exports = cfg;
