// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    // 如果想要组件和Page的某些属性相互影响可以使用这个属性，这个属性的默认值是isolated
    // isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）；
    // apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
    // shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply - shared 或 shared 的自定义组件。（这个选项在插件中不可用。）
    styleIsolation:"apply-shared"
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
