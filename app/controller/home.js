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
  async sendEmail() {
    const { ctx } = this;
    const mailOptions = {
      from: 'jinjun199403@163.com',
      to: 'jinjun19940001@163.com',
      subject: 'hello world 我是金俊发送的邮件',
      html: '<a href = \'link\'>点击链接进行验证</a>',
    };

    // this.app.email.sendMail(mailOptions, (error, response) => {
    //   if (error) {
    //     ctx.body = {
    //       data: { error },
    //     };
    //     console.log('error:', error);
    //   } else {
    //     ctx.body = {
    //       data: { 'email sent: ': response.message },
    //     };
    //     console.log('email sent: ' + response.message);
    //   }
    //   this.app.email.close();
    // });
    const result = await this.app.email.sendMail(mailOptions);
    ctx.body = {
      data: result,
    };
  }
}

module.exports = HomeController;
