module.exports={
    server:{
        "port":3004
    },
    db:{
        'uri':"mongodb+srv://rutvik:17bit008@productcatalog.poqge.mongodb.net/ProductCopy?retryWrites=true&w=majority",
        'uriTest':"mongodb://localhost/bags-ecommerce"
    },
    kafka:{
        "hostName":"localhost:9092",
        "topics":{
            "inventory":"InventoryStream",
            "order":"OrderStream",
            "payment":"paymentStream"
        }
    },
    eureka:{
        "host":"127.0.0.1",
        "port":8761,
        "hostname":"localhost",
        "ipAddress":"127.0.0.1",
        "enabled":true,
        "dataCenter":{
          "name":"MyOwn"
        },
        "servicePath":"/eureka/apps/",
        "maxRetries":5,
        "requestRetryDelay": 10000
      },
      "application":{
        "name":"Inventory-Service"
      }
}
