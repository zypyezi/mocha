var add = require('./add')
var expect = require('chai').expect;

describe(
    '单元测试',  
    function (){
        it('1加1应该等于2',function (done) {
            var f = function() {
                x = false;
                expect(x).to.be.not.ok;
                // done();  // 通知Mocha测试结束
              };
              setTimeout(f, 4000);
        })
    }
)