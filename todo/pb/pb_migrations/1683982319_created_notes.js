migrate((db) => {
  const collection = new Collection({
    "id": "j5ybw658nwlskrx",
    "created": "2023-05-13 12:51:59.788Z",
    "updated": "2023-05-13 12:51:59.788Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pjtphscv",
        "name": "titlePb",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jucrs48n",
        "name": "mainTextPb",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j5ybw658nwlskrx");

  return dao.deleteCollection(collection);
})
