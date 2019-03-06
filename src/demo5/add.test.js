var add = require('../demo4/add')
var expect = require('chai').expect;

describe(
    'hooks',  
    function (){
        before(function () {
             // 在本区块的所有测试用例之前执行
        })
        after(function () {
            // 在本区块的所有测试用例之后执行
        })
        beforeEach(function () {
            // 在本区块的每个测试用例之前执行
        })
        afterEach(function () {
            // 在本区块的每个测试用例之后执行
        })
    }
)



describe(
    'beforeEach',  
    function (){
        var foo
        beforeEach(function (done) {
            setTimeout(function () {
                foo = 1
                done()
            }, 1000)
        })

        it('foo 变量需要初始化',function () {
            expect(foo).to.be.equal(1);
        })
    }
)