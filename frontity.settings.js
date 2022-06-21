const settings = {
  "name": "tia",
  "state": {
    "frontity": {
      "url": "https://id.techinasia.com",
      "title": "TIA BLOG",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Premium",
              "/category/premium-content/"
            ],
            [
              "Partnership",
              "/category/partnership-content/"
            ],
            [
              "Update",
              "/category/startup/"
            ],
            [
              "Teknologi",
              "/category/teknologi/"
            ],
            [
              "Rangkuman",
              "/category/brief/"
            ],
            [
              "Executif Brief",
              "/category/executive-brief/"
            ],
            [
              "Agenda",
              "/category/event/"
            ],
            [
              "Data",
              "/category/data/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://id.techinasia.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
