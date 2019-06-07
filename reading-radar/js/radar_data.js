// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "个人管理",
    "left" : 45,
    "top" : 188,
    "color" : "#1bc2a0",
    "items" : [
  {
    "name": "高效能人士的七个习惯",
    "pc": {
      "r": 0,
      "t": 179
    },
    "comments": "",
    "movement": "c",
	"url":""
  },
  {
    "name": "如何高效学习",
    "pc": {
      "r": 0,
      "t": 159
    },
    "comments": "",
    "movement": "c",
	"url":""
  },
  {
    "name": "如何阅读一本书",
    "pc": {
      "r": 0,
      "t": 156
    },
    "comments": "",
    "movement": "c",
	"url":""
  },  
  {
    "name": "赢",
    "pc": {
      "r": 0,
      "t": 139
    },
    "comments": "",
    "movement": "c",
	"url":""
  },  
  {
    "name": "结构思考力1",
    "pc": {
      "r": 0,
      "t": 99
    },
    "comments": "",
    "movement": "t",
	"url":"https://www.yuque.com/lencho/readingradar/agmal8/edit"
  },
  {
    "name": "透过结构看世界",
    "pc": {
      "r": 0,
      "t": 110
    },
    "comments": "",
    "movement": "c",
	"url":"https://www.yuque.com/lencho/readingradar/agmal8/edit"
  },
  {
    "name": "金字塔原理",
    "pc": {
      "r": 1,
      "t": 123
    },
    "comments": "",
    "movement": "c"
  }, 
  {
    "name": "原则",
    "pc": {
      "r": 2,
      "t": 100
    },
    "comments": "",
    "movement": "c"
  },   
  {
    "name": "沟通圣经",
    "pc": {
      "r": 2,
      "t": 163
    },
    "comments": "",
    "movement": "c"
  },   
  {
    "name": "影响力",
    "pc": {
      "r": 1,
      "t": 113
    },
    "comments": "",
    "movement": "c"
  },   
  {
    "name": "非暴力沟通",
    "pc": {
      "r": 1,
      "t": 103
    },
    "comments": "",
    "movement": "c"
  }, 
  {
    "name": "第五项修炼",
    "pc": {
      "r": 1,
      "t": 113
    },
    "comments": "",
    "movement": "c"
  }, 
  {
    "name": "高绩效教练",
    "pc": {
      "r": 1,
      "t": 133
    },
    "comments": "",
    "movement": "c"
  },   
  {
    "name": "刻意练习",
    "pc": {
      "r": 3,
      "t": 93
    },
    "comments": "",
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "科学原理",
    "left": w-300+30,
    "top" : 188,
    "color" : "#1b9dc2",
    "items" : [
  {
    "name": "数学",
    "pc": {
      "r": 0,
      "t": 68
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "物理",
    "pc": {
      "r": 1,
      "t": 76
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "化学",
    "pc": {
      "r": 2,
      "t": 46
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "。。。",
    "pc": {
      "r": 3,
      "t": 20
    },
    "comments": "",
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "其他",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#febb34",
    "items" : [
  {
    "name": "人类简史",
    "pc": {
      "r": 0,
      "t": 248
    },
    "comments": "",
    "movement": "c"
  },{
    "name": "极简欧洲史",
    "pc": {
      "r": 0,
      "t": 200
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "未来简史",
    "pc": {
      "r": 1,
      "t": 192
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "光荣与梦想",
    "pc": {
      "r": 1,
      "t": 182
    },
    "comments": "",
    "movement": "c"
  }, 
  {
    "name": "论中国",
    "pc": {
      "r": 1,
      "t": 170
    },
    "comments": "",
    "movement": "c"
  }, 
  {
    "name": "魔鬼经济学",
    "pc": {
      "r": 1,
      "t": 130
    },
    "comments": "",
    "movement": "c"
  }, 
  {
    "name": "小岛经济学",
    "pc": {
      "r": 1,
      "t": 145
    },
    "comments": "",
    "movement": "c"
  }, 
  {
    "name": "牛奶可乐经济学",
    "pc": {
      "r": 1,
      "t": 125
    },
    "comments": "",
    "movement": "c"
  },   
  {
    "name": "剑桥中国史",
    "pc": {
      "r": 2,
      "t": 224
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "资治通鉴",
    "pc": {
      "r": 3,
      "t": 256
    },
    "comments": "",
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "工程技术",
    "color" : "#e02e49",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "大数据时代",
    "pc": {
      "r": 0,
      "t": 314
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "用户户故事与敏捷开发",
    "pc": {
      "r": 0,
      "t": 334
    },
    "comments": "",
    "movement": "c"
  }, 
  {
    "name": "SQL基础教程",
    "pc": {
      "r": 0,
      "t": 309
    },
    "comments": "",
    "movement": "c"
  },   
  {
    "name": "高绩效教练",
    "pc": {
      "r": 1,
      "t": 312
    },
    "comments": "",
    "movement": "c"
  },  
  {
    "name": "循序渐进学Spark",
    "pc": {
      "r": 2,
      "t": 274
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Hadoop权威指南",
    "pc": {
      "r": 2,
      "t": 322
    },
    "comments": "",
    "movement": "c"
  },  
  {
    "name": "白话大数据与机器学习",
    "pc": {
      "r": 3,
      "t": 330
    },
    "comments": "",
    "movement": "c"
  }
]
  }
];
