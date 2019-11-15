'use strict';
const axios = require('axios');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  time() {
    const { ctx } = this;
    ctx.body = {
      time: new Date(),
    };
  }
  async getFund() {
    const data = await (axios.get('http://fund.eastmoney.com/pingzhongdata/006327.js?v=20191012163023'));
    // console.log(data);
    // eslint-disable-next-line no-eval
    // eval(data.data);
    // eslint-disable-next-line no-undef
    // console.log(ishb);
    // // eslint-disable-next-line no-undef
    // console.log(Data_netWorthTrend);
    const { ctx } = this;
    // console.log('object');
    ctx.body = {
      data: data.data,
    };
  }
}

module.exports = HomeController;
