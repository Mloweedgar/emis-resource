define({ "api": [
  {
    "type": "delete",
    "url": "/adjustments/:id",
    "title": "Delete Existing Adjustments",
    "version": "1.0.0",
    "name": "DeleteAdjustment",
    "group": "Adjustment",
    "description": "<p>Delete existing item</p>",
    "filename": "lib/adjustment.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/adjustments/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>Human readable reason of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under which stock adjustment is performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Value which a stock of an item(or resource) is adjusted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Total cost associated with adjustion a stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>A brief summary about performed adjustment if available i.e additional details that clarify why adjustment was performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when adjustment was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when adjustment was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf52d8cfd8603182a58c989\",\n  \"type\": \"Deduction\",\n  \"reason\": \"Cycle Count\",\n  \"item\": {\n      \"_id\": \"5bf52d88fd8603182a58c933\",\n      \"type\": \"Other\",\n      \"code\": \"BS\",\n      \"name\": \"BAR SOAP\",\n      \"color\": \"#D72E29\"\n  },\n  \"quantity\": 44,\n  \"cost\": 6350,\n  \"remarks\": \"Sit quis libero dolorum quasi officia neque.\",\n  \"updatedAt\": \"2018-11-21T10:03:57.679Z\",\n  \"createdAt\": \"2018-11-21T10:03:57.679Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/adjustments/:id",
    "title": "Get Existing Adjustments",
    "version": "1.0.0",
    "name": "GetAdjustment",
    "group": "Adjustment",
    "description": "<p>Get existing item</p>",
    "filename": "lib/adjustment.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/adjustments/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>Human readable reason of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under which stock adjustment is performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Value which a stock of an item(or resource) is adjusted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Total cost associated with adjustion a stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>A brief summary about performed adjustment if available i.e additional details that clarify why adjustment was performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when adjustment was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when adjustment was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf52d8cfd8603182a58c989\",\n  \"type\": \"Deduction\",\n  \"reason\": \"Cycle Count\",\n  \"item\": {\n      \"_id\": \"5bf52d88fd8603182a58c933\",\n      \"type\": \"Other\",\n      \"code\": \"BS\",\n      \"name\": \"BAR SOAP\",\n      \"color\": \"#D72E29\"\n  },\n  \"quantity\": 44,\n  \"cost\": 6350,\n  \"remarks\": \"Sit quis libero dolorum quasi officia neque.\",\n  \"updatedAt\": \"2018-11-21T10:03:57.679Z\",\n  \"createdAt\": \"2018-11-21T10:03:57.679Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/adjustments/schema",
    "title": "Get Adjustments Schema",
    "version": "1.0.0",
    "name": "GetAdjustmentSchema",
    "group": "Adjustment",
    "description": "<p>Returns item json schema definition</p>",
    "filename": "lib/adjustment.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/adjustments/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/adjustments",
    "title": "List Adjustments",
    "version": "1.0.0",
    "name": "GetAdjustments",
    "group": "Adjustment",
    "description": "<p>Returns a list of adjustments</p>",
    "filename": "lib/adjustment.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/adjustments"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Adjustment[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of adjustments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>Human readable type of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.reason",
            "description": "<p>Human readable reason of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "data.item",
            "description": "<p>An item under which stock adjustment is performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.quantity",
            "description": "<p>Value which a stock of an item(or resource) is adjusted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cost",
            "description": "<p>Total cost associated with adjustion a stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remarks",
            "description": "<p>A brief summary about performed adjustment if available i.e additional details that clarify why adjustment was performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when adjustment was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when adjustment was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of adjustments</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of adjustments returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest adjustments was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"data\": [\n {\n   \"_id\": \"5bf52d8cfd8603182a58c989\",\n   \"type\": \"Deduction\",\n   \"reason\": \"Cycle Count\",\n   \"item\": {\n       \"_id\": \"5bf52d88fd8603182a58c933\",\n       \"type\": \"Other\",\n       \"code\": \"BS\",\n       \"name\": \"BAR SOAP\",\n       \"color\": \"#D72E29\"\n   },\n   \"quantity\": 44,\n   \"cost\": 6350,\n   \"remarks\": \"Sit quis libero dolorum quasi officia neque.\",\n   \"updatedAt\": \"2018-11-21T10:03:57.679Z\",\n   \"createdAt\": \"2018-11-21T10:03:57.679Z\"\n }\n   ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/adjustments/:id",
    "title": "Patch Existing Adjustments",
    "version": "1.0.0",
    "name": "PatchAdjustment",
    "group": "Adjustment",
    "description": "<p>Patch existing item</p>",
    "filename": "lib/adjustment.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/adjustments/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>Human readable reason of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under which stock adjustment is performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Value which a stock of an item(or resource) is adjusted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Total cost associated with adjustion a stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>A brief summary about performed adjustment if available i.e additional details that clarify why adjustment was performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when adjustment was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when adjustment was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf52d8cfd8603182a58c989\",\n  \"type\": \"Deduction\",\n  \"reason\": \"Cycle Count\",\n  \"item\": {\n      \"_id\": \"5bf52d88fd8603182a58c933\",\n      \"type\": \"Other\",\n      \"code\": \"BS\",\n      \"name\": \"BAR SOAP\",\n      \"color\": \"#D72E29\"\n  },\n  \"quantity\": 44,\n  \"cost\": 6350,\n  \"remarks\": \"Sit quis libero dolorum quasi officia neque.\",\n  \"updatedAt\": \"2018-11-21T10:03:57.679Z\",\n  \"createdAt\": \"2018-11-21T10:03:57.679Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/adjustments",
    "title": "Create New Adjustments",
    "version": "1.0.0",
    "name": "PostAdjustment",
    "group": "Adjustment",
    "description": "<p>Create new item</p>",
    "filename": "lib/adjustment.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/adjustments"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>Human readable reason of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under which stock adjustment is performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Value which a stock of an item(or resource) is adjusted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Total cost associated with adjustion a stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>A brief summary about performed adjustment if available i.e additional details that clarify why adjustment was performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when adjustment was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when adjustment was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf52d8cfd8603182a58c989\",\n  \"type\": \"Deduction\",\n  \"reason\": \"Cycle Count\",\n  \"item\": {\n      \"_id\": \"5bf52d88fd8603182a58c933\",\n      \"type\": \"Other\",\n      \"code\": \"BS\",\n      \"name\": \"BAR SOAP\",\n      \"color\": \"#D72E29\"\n  },\n  \"quantity\": 44,\n  \"cost\": 6350,\n  \"remarks\": \"Sit quis libero dolorum quasi officia neque.\",\n  \"updatedAt\": \"2018-11-21T10:03:57.679Z\",\n  \"createdAt\": \"2018-11-21T10:03:57.679Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/adjustments/:id",
    "title": "Put Existing Adjustments",
    "version": "1.0.0",
    "name": "PutAdjustment",
    "group": "Adjustment",
    "description": "<p>Put existing item</p>",
    "filename": "lib/adjustment.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/adjustments/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>Human readable reason of performed stock adjustment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under which stock adjustment is performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Value which a stock of an item(or resource) is adjusted.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Total cost associated with adjustion a stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>A brief summary about performed adjustment if available i.e additional details that clarify why adjustment was performed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when adjustment was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when adjustment was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf52d8cfd8603182a58c989\",\n  \"type\": \"Deduction\",\n  \"reason\": \"Cycle Count\",\n  \"item\": {\n      \"_id\": \"5bf52d88fd8603182a58c933\",\n      \"type\": \"Other\",\n      \"code\": \"BS\",\n      \"name\": \"BAR SOAP\",\n      \"color\": \"#D72E29\"\n  },\n  \"quantity\": 44,\n  \"cost\": 6350,\n  \"remarks\": \"Sit quis libero dolorum quasi officia neque.\",\n  \"updatedAt\": \"2018-11-21T10:03:57.679Z\",\n  \"createdAt\": \"2018-11-21T10:03:57.679Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/items/:id",
    "title": "Delete Existing Items",
    "version": "1.0.0",
    "name": "DeleteItem",
    "group": "Item",
    "description": "<p>Delete existing item</p>",
    "filename": "lib/item.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/items/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable, unique identifier of an item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an item(or resource) if available i.e additional details that clarify what is an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uom",
            "description": "<p>Human readable unit of measure of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minStockAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxStockAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "expirable",
            "defaultValue": "false",
            "description": "<p>Flag whether an item(or resource) may expire when stocked.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when item(or resource) was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when item(or resource) was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf502f74abf116f49e8e11e\",\n  \"type\": \"Other\",\n  \"code\": \"BFA\",\n  \"name\": \"BLANKET FOR ADULTS\",\n  \"uom\": \"piece\",\n  \"minStockAllowed\": 10,\n  \"maxStockAllowed\": 1000,\n  \"color\": \"#D72E29\",\n  \"expirable\": false,\n  \"updatedAt\": \"2018-11-21T07:02:15.131Z\",\n  \"createdAt\": \"2018-11-21T07:02:15.131Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/items/:id",
    "title": "Get Existing Items",
    "version": "1.0.0",
    "name": "GetItem",
    "group": "Item",
    "description": "<p>Get existing item</p>",
    "filename": "lib/item.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/items/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable, unique identifier of an item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an item(or resource) if available i.e additional details that clarify what is an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uom",
            "description": "<p>Human readable unit of measure of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minStockAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxStockAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "expirable",
            "defaultValue": "false",
            "description": "<p>Flag whether an item(or resource) may expire when stocked.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when item(or resource) was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when item(or resource) was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf502f74abf116f49e8e11e\",\n  \"type\": \"Other\",\n  \"code\": \"BFA\",\n  \"name\": \"BLANKET FOR ADULTS\",\n  \"uom\": \"piece\",\n  \"minStockAllowed\": 10,\n  \"maxStockAllowed\": 1000,\n  \"color\": \"#D72E29\",\n  \"expirable\": false,\n  \"updatedAt\": \"2018-11-21T07:02:15.131Z\",\n  \"createdAt\": \"2018-11-21T07:02:15.131Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/items/schema",
    "title": "Get Items Schema",
    "version": "1.0.0",
    "name": "GetItemSchema",
    "group": "Item",
    "description": "<p>Returns item json schema definition</p>",
    "filename": "lib/item.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/items/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/items",
    "title": "List Items",
    "version": "1.0.0",
    "name": "GetItems",
    "group": "Item",
    "description": "<p>Returns a list of items</p>",
    "filename": "lib/item.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/items"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Item[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>Human readable type of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.code",
            "description": "<p>Human readable, unique identifier of an item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary(definition) about an item(or resource) if available i.e additional details that clarify what is an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.uom",
            "description": "<p>Human readable unit of measure of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.minStockAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.maxStockAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "expirable",
            "defaultValue": "false",
            "description": "<p>Flag whether an item(or resource) may expire when stocked.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when item(or resource) was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when item(or resource) was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of items(or resources)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of items(or resources) returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest items(or resources) was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"data\": [\n   {\n     \"_id\": \"5bf502f74abf116f49e8e11e\",\n     \"type\": \"Other\",\n     \"code\": \"BFA\",\n     \"name\": \"BLANKET FOR ADULTS\",\n     \"uom\": \"piece\",\n     \"minStockAllowed\": 10,\n     \"maxStockAllowed\": 1000,\n     \"color\": \"#D72E29\",\n     \"expirable\": false,\n     \"updatedAt\": \"2018-11-21T07:02:15.131Z\",\n     \"createdAt\": \"2018-11-21T07:02:15.131Z\"\n    }\n   ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/items/:id",
    "title": "Patch Existing Items",
    "version": "1.0.0",
    "name": "PatchItem",
    "group": "Item",
    "description": "<p>Patch existing item</p>",
    "filename": "lib/item.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/items/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable, unique identifier of an item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an item(or resource) if available i.e additional details that clarify what is an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uom",
            "description": "<p>Human readable unit of measure of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minStockAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxStockAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "expirable",
            "defaultValue": "false",
            "description": "<p>Flag whether an item(or resource) may expire when stocked.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when item(or resource) was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when item(or resource) was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf502f74abf116f49e8e11e\",\n  \"type\": \"Other\",\n  \"code\": \"BFA\",\n  \"name\": \"BLANKET FOR ADULTS\",\n  \"uom\": \"piece\",\n  \"minStockAllowed\": 10,\n  \"maxStockAllowed\": 1000,\n  \"color\": \"#D72E29\",\n  \"expirable\": false,\n  \"updatedAt\": \"2018-11-21T07:02:15.131Z\",\n  \"createdAt\": \"2018-11-21T07:02:15.131Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/items",
    "title": "Create New Items",
    "version": "1.0.0",
    "name": "PostItem",
    "group": "Item",
    "description": "<p>Create new item</p>",
    "filename": "lib/item.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/items"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable, unique identifier of an item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an item(or resource) if available i.e additional details that clarify what is an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uom",
            "description": "<p>Human readable unit of measure of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minStockAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxStockAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "expirable",
            "defaultValue": "false",
            "description": "<p>Flag whether an item(or resource) may expire when stocked.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when item(or resource) was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when item(or resource) was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf502f74abf116f49e8e11e\",\n  \"type\": \"Other\",\n  \"code\": \"BFA\",\n  \"name\": \"BLANKET FOR ADULTS\",\n  \"uom\": \"piece\",\n  \"minStockAllowed\": 10,\n  \"maxStockAllowed\": 1000,\n  \"color\": \"#D72E29\",\n  \"expirable\": false,\n  \"updatedAt\": \"2018-11-21T07:02:15.131Z\",\n  \"createdAt\": \"2018-11-21T07:02:15.131Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/items/:id",
    "title": "Put Existing Items",
    "version": "1.0.0",
    "name": "PutItem",
    "group": "Item",
    "description": "<p>Put existing item</p>",
    "filename": "lib/item.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/items/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Human readable, unique identifier of an item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an item(or resource) if available i.e additional details that clarify what is an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uom",
            "description": "<p>Human readable unit of measure of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minStockAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxStockAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate an item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate item(or resource) type visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "expirable",
            "defaultValue": "false",
            "description": "<p>Flag whether an item(or resource) may expire when stocked.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when item(or resource) was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when item(or resource) was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf502f74abf116f49e8e11e\",\n  \"type\": \"Other\",\n  \"code\": \"BFA\",\n  \"name\": \"BLANKET FOR ADULTS\",\n  \"uom\": \"piece\",\n  \"minStockAllowed\": 10,\n  \"maxStockAllowed\": 1000,\n  \"color\": \"#D72E29\",\n  \"expirable\": false,\n  \"updatedAt\": \"2018-11-21T07:02:15.131Z\",\n  \"createdAt\": \"2018-11-21T07:02:15.131Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/stocks/:id",
    "title": "Delete Existing Stocks",
    "version": "1.0.0",
    "name": "DeleteStock",
    "group": "Stock",
    "description": "<p>Delete existing stock</p>",
    "filename": "lib/stock.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/stocks/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Feature",
            "optional": false,
            "field": "stock",
            "description": "<p>A storage facility where stock a kept physically.</p>"
          },
          {
            "group": "Success 200",
            "type": "Party",
            "optional": false,
            "field": "owner",
            "description": "<p>A party(i.e institution, organization etc) owning item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Current available number of items in stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when stock was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when stock was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf523def4e7140b728f8890\",\n  \"store\": {\n     \"category\":\"Building\",\n     \"type\":\"Warehouse\",\n     \"name\":\"Mbeya\"\n  },\n  \"owner\": {\n     \"_id\": \"5bf523dbf4e7140b728f885f\"\n     \"name\": \"Lally Elias\",\n     \"email\": \"lallyelias87@gmail.com\",\n     \"mobile\": \"255714095061\",\n  },\n  \"item\": {\n     \"_id\": \"5bf523dcf4e7140b728f8868\"\n     \"type\": \"Other\",\n     \"code\": \"BS\",\n     \"name\": \"BAR SOAP\",\n     \"color\": \"#D72E29\",\n  },\n  \"quantity\": 682,\n  \"minAllowed\": 9,\n  \"maxAllowed\": 9217,\n  \"updatedAt\": \"2018-11-21T09:22:39.340Z\",\n  \"createdAt\": \"2018-11-21T09:22:39.340Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stocks/:id",
    "title": "Get Existing Stocks",
    "version": "1.0.0",
    "name": "GetStock",
    "group": "Stock",
    "description": "<p>Get existing stock</p>",
    "filename": "lib/stock.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/stocks/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Feature",
            "optional": false,
            "field": "stock",
            "description": "<p>A storage facility where stock a kept physically.</p>"
          },
          {
            "group": "Success 200",
            "type": "Party",
            "optional": false,
            "field": "owner",
            "description": "<p>A party(i.e institution, organization etc) owning item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Current available number of items in stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when stock was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when stock was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf523def4e7140b728f8890\",\n  \"store\": {\n     \"category\":\"Building\",\n     \"type\":\"Warehouse\",\n     \"name\":\"Mbeya\"\n  },\n  \"owner\": {\n     \"_id\": \"5bf523dbf4e7140b728f885f\"\n     \"name\": \"Lally Elias\",\n     \"email\": \"lallyelias87@gmail.com\",\n     \"mobile\": \"255714095061\",\n  },\n  \"item\": {\n     \"_id\": \"5bf523dcf4e7140b728f8868\"\n     \"type\": \"Other\",\n     \"code\": \"BS\",\n     \"name\": \"BAR SOAP\",\n     \"color\": \"#D72E29\",\n  },\n  \"quantity\": 682,\n  \"minAllowed\": 9,\n  \"maxAllowed\": 9217,\n  \"updatedAt\": \"2018-11-21T09:22:39.340Z\",\n  \"createdAt\": \"2018-11-21T09:22:39.340Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/stocks/schema",
    "title": "Get Stocks Schema",
    "version": "1.0.0",
    "name": "GetStockSchema",
    "group": "Stock",
    "description": "<p>Returns item json schema definition</p>",
    "filename": "lib/stock.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/stocks/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/stocks",
    "title": "List Stocks",
    "version": "1.0.0",
    "name": "GetStocks",
    "group": "Stock",
    "description": "<p>Returns a list of stocks</p>",
    "filename": "lib/stock.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/stocks"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Stock[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of stocks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Feature",
            "optional": false,
            "field": "data.stock",
            "description": "<p>A storage facility where stock a kept physically.</p>"
          },
          {
            "group": "Success 200",
            "type": "Party",
            "optional": false,
            "field": "data.owner",
            "description": "<p>A party(i.e institution, organization etc) owning item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "data.item",
            "description": "<p>An item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.quantity",
            "description": "<p>Current available number of items in stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.minAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.maxAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when stock was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when stock was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of stocks</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of stocks returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest stocks was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"data\": [\n {\n   \"_id\": \"5bf523def4e7140b728f8890\",\n   \"store\": {\n      \"category\":\"Building\",\n      \"type\":\"Warehouse\",\n      \"name\":\"Mbeya\"\n   },\n   \"owner\": {\n      \"_id\": \"5bf523dbf4e7140b728f885f\"\n      \"name\": \"Lally Elias\",\n      \"email\": \"lallyelias87@gmail.com\",\n      \"mobile\": \"255714095061\",\n   },\n   \"item\": {\n      \"_id\": \"5bf523dcf4e7140b728f8868\"\n      \"type\": \"Other\",\n      \"code\": \"BS\",\n      \"name\": \"BAR SOAP\",\n      \"color\": \"#D72E29\",\n   },\n   \"quantity\": 682,\n   \"minAllowed\": 9,\n   \"maxAllowed\": 9217,\n   \"updatedAt\": \"2018-11-21T09:22:39.340Z\",\n   \"createdAt\": \"2018-11-21T09:22:39.340Z\"\n }\n   ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/stocks/:id",
    "title": "Patch Existing Stocks",
    "version": "1.0.0",
    "name": "PatchStock",
    "group": "Stock",
    "description": "<p>Patch existing stock</p>",
    "filename": "lib/stock.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/stocks/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Feature",
            "optional": false,
            "field": "stock",
            "description": "<p>A storage facility where stock a kept physically.</p>"
          },
          {
            "group": "Success 200",
            "type": "Party",
            "optional": false,
            "field": "owner",
            "description": "<p>A party(i.e institution, organization etc) owning item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Current available number of items in stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when stock was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when stock was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf523def4e7140b728f8890\",\n  \"store\": {\n     \"category\":\"Building\",\n     \"type\":\"Warehouse\",\n     \"name\":\"Mbeya\"\n  },\n  \"owner\": {\n     \"_id\": \"5bf523dbf4e7140b728f885f\"\n     \"name\": \"Lally Elias\",\n     \"email\": \"lallyelias87@gmail.com\",\n     \"mobile\": \"255714095061\",\n  },\n  \"item\": {\n     \"_id\": \"5bf523dcf4e7140b728f8868\"\n     \"type\": \"Other\",\n     \"code\": \"BS\",\n     \"name\": \"BAR SOAP\",\n     \"color\": \"#D72E29\",\n  },\n  \"quantity\": 682,\n  \"minAllowed\": 9,\n  \"maxAllowed\": 9217,\n  \"updatedAt\": \"2018-11-21T09:22:39.340Z\",\n  \"createdAt\": \"2018-11-21T09:22:39.340Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/stocks",
    "title": "Create New Stocks",
    "version": "1.0.0",
    "name": "PostStock",
    "group": "Stock",
    "description": "<p>Create new stock</p>",
    "filename": "lib/stock.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/stocks"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Feature",
            "optional": false,
            "field": "stock",
            "description": "<p>A storage facility where stock a kept physically.</p>"
          },
          {
            "group": "Success 200",
            "type": "Party",
            "optional": false,
            "field": "owner",
            "description": "<p>A party(i.e institution, organization etc) owning item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Current available number of items in stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when stock was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when stock was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf523def4e7140b728f8890\",\n  \"store\": {\n     \"category\":\"Building\",\n     \"type\":\"Warehouse\",\n     \"name\":\"Mbeya\"\n  },\n  \"owner\": {\n     \"_id\": \"5bf523dbf4e7140b728f885f\"\n     \"name\": \"Lally Elias\",\n     \"email\": \"lallyelias87@gmail.com\",\n     \"mobile\": \"255714095061\",\n  },\n  \"item\": {\n     \"_id\": \"5bf523dcf4e7140b728f8868\"\n     \"type\": \"Other\",\n     \"code\": \"BS\",\n     \"name\": \"BAR SOAP\",\n     \"color\": \"#D72E29\",\n  },\n  \"quantity\": 682,\n  \"minAllowed\": 9,\n  \"maxAllowed\": 9217,\n  \"updatedAt\": \"2018-11-21T09:22:39.340Z\",\n  \"createdAt\": \"2018-11-21T09:22:39.340Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/stocks/:id",
    "title": "Put Existing Stocks",
    "version": "1.0.0",
    "name": "PutStock",
    "group": "Stock",
    "description": "<p>Put existing stock</p>",
    "filename": "lib/stock.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/stocks/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique item(or resource) identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Feature",
            "optional": false,
            "field": "stock",
            "description": "<p>A storage facility where stock a kept physically.</p>"
          },
          {
            "group": "Success 200",
            "type": "Party",
            "optional": false,
            "field": "owner",
            "description": "<p>A party(i.e institution, organization etc) owning item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Item",
            "optional": false,
            "field": "item",
            "description": "<p>An item under stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Current available number of items in stock of an item(or resource).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minAllowed",
            "description": "<p>Overall lower threshold stock of an item(or resource) below which re-fill will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maxAllowed",
            "description": "<p>Overall upper threshold stock of an item(or resource) above which re-allocation/no-purchase will be required.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when stock was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when stock was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5bf523def4e7140b728f8890\",\n  \"store\": {\n     \"category\":\"Building\",\n     \"type\":\"Warehouse\",\n     \"name\":\"Mbeya\"\n  },\n  \"owner\": {\n     \"_id\": \"5bf523dbf4e7140b728f885f\"\n     \"name\": \"Lally Elias\",\n     \"email\": \"lallyelias87@gmail.com\",\n     \"mobile\": \"255714095061\",\n  },\n  \"item\": {\n     \"_id\": \"5bf523dcf4e7140b728f8868\"\n     \"type\": \"Other\",\n     \"code\": \"BS\",\n     \"name\": \"BAR SOAP\",\n     \"color\": \"#D72E29\",\n  },\n  \"quantity\": 682,\n  \"minAllowed\": 9,\n  \"maxAllowed\": 9217,\n  \"updatedAt\": \"2018-11-21T09:22:39.340Z\",\n  \"createdAt\": \"2018-11-21T09:22:39.340Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/warehouses/:id",
    "title": "Delete Existing Warehouse",
    "version": "1.0.0",
    "name": "DeleteWarehouse",
    "group": "Warehouse",
    "description": "<p>Delete existing warehouse</p>",
    "filename": "lib/warehouse.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/warehouses/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique feature identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "defaultValue": "Building",
            "description": "<p>Human readable category(or class) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "Warehouse",
            "description": "<p>Human readable type of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "level",
            "defaultValue": "other",
            "description": "<p>Human readable administrative level of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>Human readable alternative or well known name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "about",
            "defaultValue": "undefined",
            "description": "<p>A brief summary about a feature if available i.e additional details that clarify what a feature is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "defaultValue": "undefined",
            "description": "<p>A geo-point that may be considered as the center of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": false,
            "field": "geometry",
            "description": "<p>A geo-geometry representation of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "properties",
            "description": "<p>A map of key value pairs describing (or detailing) characteristics(or traits) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "tags",
            "description": "<p>A set of human redable keywords describing a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "continent",
            "defaultValue": "Africa",
            "description": "<p>Human readable continent where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "country",
            "defaultValue": "Tanzania",
            "description": "<p>Human readable country where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when feature was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when feature was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5b5d92da476363251e13e0f4\",\n  \"category\": \"Building\",\n  \"type\": \"Warehouse\",\n  \"name\": \"Bedfordshire\",\n  \"about\": \"Doloribus animi quidem ratione.\",\n  \"geometry\": {\n   \"type\": \"Point\",\n   \"coordinates\": [-76.80207859497996, 55.69469494228919]\n  },\n  \"updatedAt\": \"2018-07-29T10:11:38.110Z\",\n  \"createdAt\": \"2018-07-29T10:11:38.110Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/warehouses/:id",
    "title": "Get Existing Warehouse",
    "version": "1.0.0",
    "name": "GetWarehouse",
    "group": "Warehouse",
    "description": "<p>Get existing warehouse</p>",
    "filename": "lib/warehouse.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/warehouses/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique feature identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "defaultValue": "Building",
            "description": "<p>Human readable category(or class) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "Warehouse",
            "description": "<p>Human readable type of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "level",
            "defaultValue": "other",
            "description": "<p>Human readable administrative level of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>Human readable alternative or well known name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "about",
            "defaultValue": "undefined",
            "description": "<p>A brief summary about a feature if available i.e additional details that clarify what a feature is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "defaultValue": "undefined",
            "description": "<p>A geo-point that may be considered as the center of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": false,
            "field": "geometry",
            "description": "<p>A geo-geometry representation of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "properties",
            "description": "<p>A map of key value pairs describing (or detailing) characteristics(or traits) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "tags",
            "description": "<p>A set of human redable keywords describing a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "continent",
            "defaultValue": "Africa",
            "description": "<p>Human readable continent where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "country",
            "defaultValue": "Tanzania",
            "description": "<p>Human readable country where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when feature was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when feature was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5b5d92da476363251e13e0f4\",\n  \"category\": \"Building\",\n  \"type\": \"Warehouse\",\n  \"name\": \"Bedfordshire\",\n  \"about\": \"Doloribus animi quidem ratione.\",\n  \"geometry\": {\n   \"type\": \"Point\",\n   \"coordinates\": [-76.80207859497996, 55.69469494228919]\n  },\n  \"updatedAt\": \"2018-07-29T10:11:38.110Z\",\n  \"createdAt\": \"2018-07-29T10:11:38.110Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/warehouses/schema",
    "title": "Get Warehouse Schema",
    "version": "1.0.0",
    "name": "GetWarehouseSchema",
    "group": "Warehouse",
    "description": "<p>Returns warehouse json schema definition</p>",
    "filename": "lib/warehouse.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/warehouses/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/warehouses",
    "title": "List Warehouses",
    "version": "1.0.0",
    "name": "GetWarehouses",
    "group": "Warehouse",
    "description": "<p>Returns a list of warehouses</p>",
    "filename": "lib/warehouse.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/warehouses"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of features</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique feature identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.category",
            "defaultValue": "Building",
            "description": "<p>Human readable category(or class) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.type",
            "defaultValue": "Warehouse",
            "description": "<p>Human readable type of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.level",
            "defaultValue": "other",
            "description": "<p>Human readable administrative level of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.nickname",
            "description": "<p>Human readable alternative or well known name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.about",
            "defaultValue": "undefined",
            "description": "<p>A brief summary about a feature if available i.e additional details that clarify what a feature is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "data.centroid",
            "defaultValue": "undefined",
            "description": "<p>A geo-point that may be considered as the center of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": false,
            "field": "data.geometry",
            "description": "<p>A geo-geometry representation of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.properties",
            "description": "<p>A map of key value pairs describing (or detailing) characteristics(or traits) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "data.tags",
            "description": "<p>A set of human redable keywords describing a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.continent",
            "defaultValue": "Africa",
            "description": "<p>Human readable continent where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.country",
            "defaultValue": "Tanzania",
            "description": "<p>Human readable country where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when feature was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when feature was last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of features</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of features returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest feature was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": [\n   {\n     \"_id\": \"5b5d92da476363251e13e0f4\",\n     \"category\": \"Building\",\n     \"type\": \"Warehouse\",\n     \"name\": \"Bedfordshire\",\n     \"about\": \"Doloribus animi quidem ratione.\",\n     \"geometry\": {\n       \"type\": \"Point\",\n       \"coordinates\": [-76.80207859497996, 55.69469494228919]\n     },\n     \"updatedAt\": \"2018-07-29T10:11:38.110Z\",\n     \"createdAt\": \"2018-07-29T10:11:38.110Z\"\n   }\n  ],\n  \"total\": 20,\n  \"size\": 10,\n  \"limit\": 10,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 2,\n  \"lastModified\": \"2018-07-29T10:11:38.111Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/warehouses/:id",
    "title": "Patch Existing Warehouse",
    "version": "1.0.0",
    "name": "PatchWarehouse",
    "group": "Warehouse",
    "description": "<p>Patch existing warehouse</p>",
    "filename": "lib/warehouse.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/warehouses/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique feature identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "defaultValue": "Building",
            "description": "<p>Human readable category(or class) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "Warehouse",
            "description": "<p>Human readable type of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "level",
            "defaultValue": "other",
            "description": "<p>Human readable administrative level of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>Human readable alternative or well known name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "about",
            "defaultValue": "undefined",
            "description": "<p>A brief summary about a feature if available i.e additional details that clarify what a feature is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "defaultValue": "undefined",
            "description": "<p>A geo-point that may be considered as the center of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": false,
            "field": "geometry",
            "description": "<p>A geo-geometry representation of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "properties",
            "description": "<p>A map of key value pairs describing (or detailing) characteristics(or traits) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "tags",
            "description": "<p>A set of human redable keywords describing a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "continent",
            "defaultValue": "Africa",
            "description": "<p>Human readable continent where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "country",
            "defaultValue": "Tanzania",
            "description": "<p>Human readable country where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when feature was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when feature was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5b5d92da476363251e13e0f4\",\n  \"category\": \"Building\",\n  \"type\": \"Warehouse\",\n  \"name\": \"Bedfordshire\",\n  \"about\": \"Doloribus animi quidem ratione.\",\n  \"geometry\": {\n   \"type\": \"Point\",\n   \"coordinates\": [-76.80207859497996, 55.69469494228919]\n  },\n  \"updatedAt\": \"2018-07-29T10:11:38.110Z\",\n  \"createdAt\": \"2018-07-29T10:11:38.110Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/warehouses",
    "title": "Create New Warehouse",
    "version": "1.0.0",
    "name": "PostWarehouse",
    "group": "Warehouse",
    "description": "<p>Create new warehouse</p>",
    "filename": "lib/warehouse.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/warehouses"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique feature identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "defaultValue": "Building",
            "description": "<p>Human readable category(or class) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "Warehouse",
            "description": "<p>Human readable type of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "level",
            "defaultValue": "other",
            "description": "<p>Human readable administrative level of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>Human readable alternative or well known name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "about",
            "defaultValue": "undefined",
            "description": "<p>A brief summary about a feature if available i.e additional details that clarify what a feature is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "defaultValue": "undefined",
            "description": "<p>A geo-point that may be considered as the center of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": false,
            "field": "geometry",
            "description": "<p>A geo-geometry representation of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "properties",
            "description": "<p>A map of key value pairs describing (or detailing) characteristics(or traits) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "tags",
            "description": "<p>A set of human redable keywords describing a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "continent",
            "defaultValue": "Africa",
            "description": "<p>Human readable continent where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "country",
            "defaultValue": "Tanzania",
            "description": "<p>Human readable country where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when feature was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when feature was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5b5d92da476363251e13e0f4\",\n  \"category\": \"Building\",\n  \"type\": \"Warehouse\",\n  \"name\": \"Bedfordshire\",\n  \"about\": \"Doloribus animi quidem ratione.\",\n  \"geometry\": {\n   \"type\": \"Point\",\n   \"coordinates\": [-76.80207859497996, 55.69469494228919]\n  },\n  \"updatedAt\": \"2018-07-29T10:11:38.110Z\",\n  \"createdAt\": \"2018-07-29T10:11:38.110Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/warehouses/:id",
    "title": "Put Existing Warehouse",
    "version": "1.0.0",
    "name": "PutWarehouse",
    "group": "Warehouse",
    "description": "<p>Put existing warehouse</p>",
    "filename": "lib/warehouse.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-resource.herokuapp.com/v1/warehouses/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique feature identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "category",
            "defaultValue": "Building",
            "description": "<p>Human readable category(or class) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "Warehouse",
            "description": "<p>Human readable type of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "level",
            "defaultValue": "other",
            "description": "<p>Human readable administrative level of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>Human readable alternative or well known name of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "about",
            "defaultValue": "undefined",
            "description": "<p>A brief summary about a feature if available i.e additional details that clarify what a feature is.</p>"
          },
          {
            "group": "Success 200",
            "type": "Point",
            "optional": true,
            "field": "centroid",
            "defaultValue": "undefined",
            "description": "<p>A geo-point that may be considered as the center of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Geometry",
            "optional": false,
            "field": "geometry",
            "description": "<p>A geo-geometry representation of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "properties",
            "description": "<p>A map of key value pairs describing (or detailing) characteristics(or traits) of a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "tags",
            "description": "<p>A set of human redable keywords describing a feature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "continent",
            "defaultValue": "Africa",
            "description": "<p>Human readable continent where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "country",
            "defaultValue": "Tanzania",
            "description": "<p>Human readable country where a feature belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when feature was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when feature was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5b5d92da476363251e13e0f4\",\n  \"category\": \"Building\",\n  \"type\": \"Warehouse\",\n  \"name\": \"Bedfordshire\",\n  \"about\": \"Doloribus animi quidem ratione.\",\n  \"geometry\": {\n   \"type\": \"Point\",\n   \"coordinates\": [-76.80207859497996, 55.69469494228919]\n  },\n  \"updatedAt\": \"2018-07-29T10:11:38.110Z\",\n  \"createdAt\": \"2018-07-29T10:11:38.110Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  }
] });
