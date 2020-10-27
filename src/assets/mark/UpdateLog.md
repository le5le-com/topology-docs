# 版本发布记录

## @topology/core@0.3.1
## 2020.09.29

* [feature]topology.data.tooltip控制是否显示提示
* [feature][fitView](https://github.com/le5le-com/topology/commit/bac5d7feb607bffa6e6526b6d406372e1864f6db)自适应屏幕大小（0.2.30版本新增特性）
* [feature]事件行为：“打开链接”新增参数 - 是否在新标签页打开
* [feature]事件行为：“修改属性数据”新增参数 - 是否立即重绘，默认是
* [optimize] 保存图片时超画布外的部分可以被保存
* [optimize] 部分函数参数保存统一性
* [bug]修复关联的连线单击不生效
* [bug]修复options.activeColor="[transparent](https://github.com/le5le-com/topology/commit/6eda94552e8b14e77dd7e17e976fffee81cb5dff)"时，图形本身也被透明了


## @topology/core@0.2.18
## 2020.07.04

* 节点特效切换后，为什么不播放了(需要执行initAnimateProps())
* 缩放没计算文字行高
* 透明背景gif
* 移动到pen鼠标，新画布增选项
* 子节点动画不生效
* borderRadius 固定数字：<1 百分比，>1 数字
* topology.data新增manualCps
* 只变高或者只变宽
* 独立旋转子节点，移动父节点，旋转被重置
* 自定义事件，新增：修改属性值

## topology/core@0.2.11
## 020.06.13

* MQTT支持
* mind脑图曲线样式调整
* 不保存也能预览
* disableEmptyLine把节点删掉，线还存在;画完线以后要失去焦点才会清空线条
* 背景的渐变没反应
* 先选中节点A，再点击节点B的子节点，依旧选中的A

## @topology/core@0.2.5 
## 2020.05.26

* 锁定状态 为1时， 节点的cursor 由 move改为pointer
* 节点隐藏
* 连接socket：connSocket函数
* 外部div提示显示、单击、双击等事件响应
* 修复动画过程中，拖拽node位置问题
* <font color=red>源码结构调整为monoreop；包名调整为scope方式</font>

## topology-core@0.2.10
## 2020.05.05

* 新增websocket事件支持
* 画布事件结构调整

## topology-core@0.2.9
## 2020.05.01

修复bug和完善细节：

* 节点锁定后，禁止快捷键删除
* Ctrl + A 全选
* [产品]缩放到合适尺寸
* 连线 改变控制点位置后，修改连线属性，控制点会复位
* 连线线背景颜色
* 边框阴影
* 设置一个节点动画，它在播放着的时候将画布中的另一个节点删除，这个节点的动画就不播放了
* add组合节点，子节点id重复
* 节点组合之后 无法执行动画
* 线条执行动画过程中 线条删除后  动画层数据没有被删掉

## topology-core@0.2.7-dev
## 2020.04.19

修复bug和完善细节：
 * space 消息返回鼠标坐标
 * 右键多选时，只选中了节点，删除时只把节点删除了
 * 同一个地址的gif，多个节点不播放
 * 连线修改，动画轨迹错误
 * 连线不重计算控制点选项
 * 可以给节点或连线加个标识，不随节点动画动
 * 单独禁止节点锚点、控制点
 * 垂直渐变（高度问题）