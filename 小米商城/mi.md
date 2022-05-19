---
title: mi v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.5"

---

# MI

> v1.0.0

绵城鼎利WEB期末考核接口

# 接口根路径：http://43.138.138.11:1110/api

# 用户接口

## POST 用户登录

POST /users/login

> Body 请求参数

```json
{
  "username": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|:--|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |用户名|
|» password|body|string| 是 |密码|

> 返回示例

登录成功

```json
{
  "code": 200,
  "data": {
    "userId": 1,
    "username": "测试用户1",
    "password": "123456",
    "userphonenumber": "12345678910"
  },
  "msg": "操作成功"
}
```

用户名或密码错误

```json
{
  "code": 400,
  "data": null,
  "msg": "用户名或密码错误"
}
```
字段校验

```json
{
  "code": 400,
  "data": null,
  "msg": "用户名的有效长度为2-6位"
}
```



## POST 用户注册

POST /users/register

> Body 请求参数

```json
{
  "username": "string",
  "password": "string",
  "phone": "stringstrin"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |用户名|
|» password|body|string| 是 |密码|
|» phone|body|string¦null| 是 |手机号码|

注册成功

```json
{
  "code": 200,
  "data": null,
  "msg": "注册成功"
}
```
用户已存在

```json
{
  "code": 400,
  "data": null,
  "msg": "用户已存在"
}
```
字段校验

```json
{
  "code": 400,
  "data": null,
  "msg": "密码在6-12位之间"
}
```



# 商品接口

## GET 查询所有商品

GET /product

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 根据种类查找商品

GET /category/{cid}

| 参数 | 种类   |
| ---- | ------ |
| 1    | 手机   |
| 2    | 电视机 |
| 3    | 空调   |
| 4    | 洗衣机 |
| 5    | 保护套 |
| 6    | 保护膜 |
| 7    | 充电宝 |
| 8    | 充电器 |

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cid|path|string| 是 |商品种类编号|

> 返回示例

> 成功

```json
{
  "code": 200,
  "data": [
    {
      "product_intro": "120Hz高帧率流速屏/ 索尼6400万前后六摄 / 6.67'小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
      "product_selling_price": 1599,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 1,
      "product_sales": 0,
      "product_num": 10,
      "product_picture": "public/imgs/phone/Redmi-k30.png",
      "product_price": 2000,
      "product_name": "Redmi K30",
      "product_title": "120Hz流速屏，全速热爱"
    },
    {
      "product_intro": "双模5G / 三路并发 / 高通骁龙765G / 7nm 5G低功耗处理器 / 120Hz高帧率流速屏 / 6.67'小孔径全面屏 / 索尼6400万前后六摄 / 最高可选8GB+256GB大存储 / 4500mAh+30W快充 / 3D四曲面玻璃机身 / 多功能NFC",
      "product_selling_price": 2599,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 2,
      "product_sales": 0,
      "product_num": 10,
      "product_picture": "public/imgs/phone/Redmi-k30-5G.png",
      "product_price": 2599,
      "product_name": "Redmi K30 5G",
      "product_title": "双模5G,120Hz流速屏"
    },
    {
      "product_intro": "1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10 倍混合光学变焦，50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 / ⼩米⾸款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216超线性扬声器",
      "product_selling_price": 2599,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 3,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Mi-CC9.png",
      "product_price": 2799,
      "product_name": "小米CC9 Pro",
      "product_title": "1亿像素,五摄四闪"
    },
    {
      "product_intro": "5000mAh超长续航 / 高通骁龙439八核处理器 / 4GB+64GB",
      "product_selling_price": 699,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 4,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-8.png",
      "product_price": 799,
      "product_name": "Redmi 8",
      "product_title": "5000mAh超长续航"
    },
    {
      "product_intro": "5000mAh超长续航 / 高通骁龙439八核处理器 / 4GB+64GB / 1200万AI后置相机",
      "product_selling_price": 699,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 5,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-8A.png",
      "product_price": 599,
      "product_name": "Redmi 8A",
      "product_title": "5000mAh超长续航"
    },
    {
      "product_intro": "6400万四摄小金刚拍照新旗舰超强解析力，超震撼",
      "product_selling_price": 1199,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 6,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-Note8-pro.png",
      "product_price": 1399,
      "product_name": "Redmi Note8 Pro",
      "product_title": "6400万全场景四摄"
    },
    {
      "product_intro": "千元4800万四摄 | 高通骁龙665 | 小金刚品质保证",
      "product_selling_price": 999,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 7,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-Note8.png",
      "product_price": 999,
      "product_name": "Redmi Note8",
      "product_title": "千元4800万四摄"
    },
    {
      "product_intro": "小巧大电量，持久又流畅骁龙8核高性能处理器 | 4000mAh超长续航 | AI人脸解锁 | 整机防泼溅",
      "product_selling_price": 539,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 8,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-7A.png",
      "product_price": 599,
      "product_name": "Redmi 7A",
      "product_title": "小巧大电量 持久流畅"
    },
    {
      "product_intro": "120Hz高帧率流速屏/ 索尼6400万前后六摄 / 6.67'小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
      "product_selling_price": 1599,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 36,
      "product_sales": 0,
      "product_num": 10,
      "product_picture": "public/imgs/phone/Redmi-k30.png",
      "product_price": 2000,
      "product_name": "Redmi K30",
      "product_title": "120Hz流速屏，全速热爱"
    },
    {
      "product_intro": "双模5G / 三路并发 / 高通骁龙765G / 7nm 5G低功耗处理器 / 120Hz高帧率流速屏 / 6.67'小孔径全面屏 / 索尼6400万前后六摄 / 最高可选8GB+256GB大存储 / 4500mAh+30W快充 / 3D四曲面玻璃机身 / 多功能NFC",
      "product_selling_price": 2599,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 37,
      "product_sales": 0,
      "product_num": 10,
      "product_picture": "public/imgs/phone/Redmi-k30-5G.png",
      "product_price": 2599,
      "product_name": "Redmi K30 5G",
      "product_title": "双模5G,120Hz流速屏"
    },
    {
      "product_intro": "1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10 倍混合光学变焦，50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 / ⼩米⾸款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216超线性扬声器",
      "product_selling_price": 2599,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 38,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Mi-CC9.png",
      "product_price": 2799,
      "product_name": "小米CC9 Pro",
      "product_title": "1亿像素,五摄四闪"
    },
    {
      "product_intro": "5000mAh超长续航 / 高通骁龙439八核处理器 / 4GB+64GB",
      "product_selling_price": 699,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 39,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-8.png",
      "product_price": 799,
      "product_name": "Redmi 8",
      "product_title": "5000mAh超长续航"
    },
    {
      "product_intro": "5000mAh超长续航 / 高通骁龙439八核处理器 / 4GB+64GB / 1200万AI后置相机",
      "product_selling_price": 699,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 40,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-8A.png",
      "product_price": 599,
      "product_name": "Redmi 8A",
      "product_title": "5000mAh超长续航"
    },
    {
      "product_intro": "6400万四摄小金刚拍照新旗舰超强解析力，超震撼",
      "product_selling_price": 1199,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 41,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-Note8-pro.png",
      "product_price": 1399,
      "product_name": "Redmi Note8 Pro",
      "product_title": "6400万全场景四摄"
    },
    {
      "product_intro": "千元4800万四摄 | 高通骁龙665 | 小金刚品质保证",
      "product_selling_price": 999,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 42,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-Note8.png",
      "product_price": 999,
      "product_name": "Redmi Note8",
      "product_title": "千元4800万四摄"
    },
    {
      "product_intro": "小巧大电量，持久又流畅骁龙8核高性能处理器 | 4000mAh超长续航 | AI人脸解锁 | 整机防泼溅",
      "product_selling_price": 539,
      "category_name": "手机",
      "category_id": 1,
      "product_id": 43,
      "product_sales": 0,
      "product_num": 20,
      "product_picture": "public/imgs/phone/Redmi-7A.png",
      "product_price": 599,
      "product_name": "Redmi 7A",
      "product_title": "小巧大电量 持久流畅"
    }
  ],
  "msg": "操作成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|状态码：200表示成功，400表示失败|
|» data|[object]|true|none|返回结果集|
|»» product_intro|string|true|none|商品介绍|
|»» product_selling_price|integer|true|none|商品打折价格|
|»» category_name|string|true|none|种类名|
|»» category_id|integer|true|none|种类编号|
|»» product_id|integer|true|none|商品编号|
|»» product_sales|integer|true|none|商品已售数量|
|»» product_num|integer|true|none|商品库存数量|
|»» product_picture|string|true|none|商品图片|
|»» product_price|integer|true|none|商品价格|
|»» product_name|string|true|none|商品名称|
|»» product_title|string|true|none|商品标题|
|» msg|string|true|none|响应提示|

## GET 查询单个商品详情

GET /product/{pid}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pid|path|string| 是 |商品ID|



```json
{
  "code": 200,
  "data": {
    "product_intro": "120Hz高帧率流速屏/ 索尼6400万前后六摄 / 6.67'小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
    "product_selling_price": 1599,
    "category_id": 1,
    "product_id": 1,
    "product_sales": 0,
    "product_num": 10,
    "product_picture": "public/imgs/phone/Redmi-k30.png",
    "product_price": 2000,
    "info_pictures": "public/imgs/phone/picture/Redmi-k30-1.png~public/imgs/phone/picture/Redmi-k30-2.png~public/imgs/phone/picture/Redmi-k30-3.png~public/imgs/phone/picture/Redmi-k30-4.png~public/imgs/phone/picture/Redmi-k30-5.png",
    "product_name": "Redmi K30",
    "product_title": "120Hz流速屏，全速热爱"
  },
  "msg": "操作成功"
}
```

# 购物车接口

## DELETE 删除订单

DELETE /order/{oid}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|oid|path|string| 是 |订单ID|

```json
{
  "code": 200,
  "data": null,
  "msg": "删除成功"
}
```

```json
{
  "code": 400,
  "data": null,
  "msg": "删除失败"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询用户的订单(分页查询)

GET /order/{uid}/{currentPage}/{size}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|uid|path|string| 是 |用户ID|
|currentPage|path|string| 是 |当前页|
|size|path|string| 是 |页大小|

> 返回示例

> 成功

```json
{
  "code": 200,
  "data": {
    "records": [
      {
        "productId": 2,
        "productName": "Redmi K30 5G",
        "categoryId": 1,
        "productTitle": "双模5G,120Hz流速屏",
        "productIntro": "双模5G / 三路并发 / 高通骁龙765G / 7nm 5G低功耗处理器 / 120Hz高帧率流速屏 / 6.67'小孔径全面屏 / 索尼6400万前后六摄 / 最高可选8GB+256GB大存储 / 4500mAh+30W快充 / 3D四曲面玻璃机身 / 多功能NFC",
        "productPicture": "public/imgs/phone/Redmi-k30-5G.png",
        "productPrice": 2599,
        "productSellingPrice": 2599,
        "productNum": 10,
        "productSales": 0,
        "infoPicture": null
      }
    ],
    "total": 1,
    "size": 1,
    "current": 1,
    "orders": [],
    "optimizeCountSql": true,
    "hitCount": false,
    "countId": null,
    "maxLimit": null,
    "searchCount": true,
    "pages": 1
  },
  "msg": "操作成功"
}
```

### 

## POST 添加订单到购物车

POST /order/{uid}/{pid}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|uid|path|string| 是 |none|
|pid|path|string| 是 ||

