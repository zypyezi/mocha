var add = require('./add')
var expect = require('chai').expect;

describe(
    '单元测试',  
    function (){
        it('1加1应该等于2',function () {
            expect(add(1, 1)).to.be.equal(2);  //使用了断言库
        })
    }
)