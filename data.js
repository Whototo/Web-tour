var APP_DATA = {
  "scenes": [
    {
      "id": "0-atrium",
      "name": "Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.1003129279961215,
        "pitch": -0.13125252326319448,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.628673845495923,
          "pitch": 0.0746007910926032,
          "rotation": 0.7853981633974483,
          "target": "1-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.017692918268314,
          "pitch": 0.2923829907763249,
          "title": "NUS&nbsp;School of Business",
          "text": "Atrium, level 1"
        }
      ]
    },
    {
      "id": "1-level-2",
      "name": "Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.0094037011742572,
        "pitch": -0.04657347599661321,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.25620580174680896,
          "pitch": 0.07930061872777117,
          "rotation": 0.7853981633974483,
          "target": "2-level-3"
        },
        {
          "yaw": 1.122453533610848,
          "pitch": 0.3919114491784459,
          "rotation": 10.210176124166829,
          "target": "0-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0284974552383979,
          "pitch": -0.2743084912192728,
          "title": "NUS School of Business",
          "text": "Level 2"
        }
      ]
    },
    {
      "id": "2-level-3",
      "name": "Level 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.515926491055332,
        "pitch": 0.05361786706560068,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8969483447149607,
          "pitch": 0.15338310253367915,
          "rotation": 3.9269908169872414,
          "target": "1-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8561947832510226,
          "pitch": -0.1908125439002042,
          "title": "NUS&nbsp;School of Business",
          "text": "Level 3"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
