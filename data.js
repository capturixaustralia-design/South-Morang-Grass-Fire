var APP_DATA = {
  "scenes": [
    {
      "id": "0-ground-scan",
      "name": "Ground Scan",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.221783191696531,
        "pitch": -0.08679700570419868,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": -2.2836521433547183,
          "pitch": 0.4233622315250507,
          "rotation": 0,
          "target": "1-walk-through"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-walk-through",
      "name": "Walk through",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.9133374782362633,
        "pitch": 0.47447393858787734,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [
        {
          "yaw": -1.9653832813124978,
          "pitch": 0.27253369350406587,
          "rotation": 0,
          "target": "2-forward"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0525751323935104,
          "pitch": 0.485175292461296,
          "title": "Debris found onsite",
          "text": "Fire extinguisher S/N xyz-123"
        }
      ]
    },
    {
      "id": "2-forward",
      "name": "Forward",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.849651111341257,
        "pitch": 0.10681635529087075,
        "fov": 1.3473765980835988
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Virtual Site Inspection",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
