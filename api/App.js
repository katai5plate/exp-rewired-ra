const express = require("express");
module.exports = class {
  constructor(config) {
    const { data, port, use, listen, route } = config;
    this.data = data;
    this.config = config;
    this.app = express();
    use(this).forEach(u => this.app.use(u));
    this.app.listen(port, listen(this));
    Object.entries(route).forEach(([uri, item]) => {
      Object.entries(item).forEach(([method, cb]) => {
        this.app[method](uri, cb(this));
      });
    });
  }
  getAllDataLength(dataName) {
    return this.data[dataName].length;
  }
  getData(dataName, qOrder, qSort, qSortDelim, qStart, qEnd) {
    const orderFlip = qOrder === "ASC" ? 1 : -1;
    const [_start, _end] = [qStart, qEnd].map(Number);
    return this.data[dataName]
      .sort((a, b) => {
        const [_a, _b] = [a, b].map(v =>
          qSort.split(qSortDelim).reduce((p, c) => p[c], v)
        );
        return _a < _b ? -1 * orderFlip : _a > _b ? 1 * orderFlip : 0;
      })
      .filter((_, i) => _start <= i && i <= _end);
  }
  getDataOne(dataName, index) {
    return this.data[dataName][index];
  }
};
