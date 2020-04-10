# app

this is a app

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

```
npx sequelize migration:generate --name=init-airline
npx sequelize db:migrate  
```

### 航线表

航线id 始发站 终点站 去程起飞时间 去程到达时间 回程起飞时间 回程到达时间 执行飞机id 班期 航线里程 机票价格

