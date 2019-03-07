//  assert 

var assert = require('assert')

// 使用严格模式
// var assert = require('assert').strict


describe('assert', function () {

    var foo = {
        a : 2
    }

    var bar = {
        a : '2'
    }

    var foo1 = Object.create(foo)

    it('equal测试相等',function () {
        assert.equal(1, "1",'数字1和字符串1此时相等'); 
    })

    // it('equal测试不相等',function () {
    //     assert.equal(1, "2",'数字1和字符串1此时不相等'); 
    // })

    // it('fail测试',function (){
    //     assert.fail('失败');
    // })


    it('是否为真值测试',function () {
        assert.ok(true)
        assert.ok(1)
        assert(true)   // assert.ok() 的别称
    })

    it('严格相等测试',function (){
        assert.deepEqual(foo, bar)
        // assert.deepEqual(foo, foo1, 'Prototypes 和自身的可枚举Symbol属性将被忽略')
        assert.deepStrictEqual(foo, bar, ' 1不等于字符串‘1’ ')
    })

})
