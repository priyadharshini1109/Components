import Component from '@ember/component';

export default Component.extend({
  // actions:{
  //   add(){
  //     var a=this.get('num1');
  //     var b=this.get('num2');
  //     var sum= +a + +b;
  //     // alert(sum);
  //     console.log(sum);
  //   }
  // },
  init(){
    this._super(...arguments);
    console.log("from init");
  },

  didReceiveAttrs(){
    console.log("from didReceiveAttrs");
    this._super(...arguments);
    var a=this.get('num1');
    var b=this.get('num2');
    var sum= +a + +b;
    this.set('x',sum);

  },

  willRender(){
    this._super(...arguments);
    console.log("from willRender");
  },

  didRender(){
    this._super(...arguments);
    console.log("from didRender");
  },

  didUpdateAttrs(){
    console.log("from diUpdateAttrs");
  }
});
