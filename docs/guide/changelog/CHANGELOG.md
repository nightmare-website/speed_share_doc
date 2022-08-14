# 更新日志

## 2.1.1
- 修复Windows获取ID连接失败的问题
- 修复安卓端后台黑屏的问题
- 修复macOS端无法启动投屏的问题
- 安卓端延迟优化
- 切换默认解码方式为硬解码，更流畅

已知核心问题如下：
- mac端经常点不开：应该是代码的问题，还没找着。
- 部分机型流转黑屏：难解
- 声音无法流转：难解
- 安卓端切换后台几率性闪退和黑屏：这个后面优化

## 2.1.0
- 整体优化

## 2.0.4
- [优化]针对酷友反馈被控端上运行《无界》会影响流畅度的问题进行了修复
- [优化]优化应用流转的流畅度

## 2.0.3
- [优化]优化其他设备应用流转到本机的实现方式，现在本机不开启无线调试也可以正常流转其他(已开启无线调试)的设备

## 2.0.2
- [增加]完善拖拽应用流转应用的功能
- [修复]扫码连接无效的问题
连接模块加回来了，避免在复杂的局域网不能自动连接的问题

## 2.0.1-dev
- [修复]修复使用ROOT开启无线调试失败的问题

## 2.0.0-beta
- [改动]app整体重构，让整体逻辑变得更简单，增加自动连接功能，弱化被控端与
控制端

！！！注意，这是一个极不稳定的测试版本，请随时做好回退更新的准备。
整体还在缓慢的开发中，目前已知问题是硬解码没有虚拟按键，后台会黑屏等。

## 1.2.5
- 修复部分缩放异常的问题

## 1.2.4
- [新增]安卓支持硬解码渲染
- [优化]显示端能全屏控制了
- [优化]减少部分设备启动卡住的几率
- [优化]优化Toast样式

## 1.2.3
- [新增]连接历史记录
- [新增]虚拟导航键可关闭

## 1.2.2
- [增加]连接后直接启动的选项

## 1.2.1
- 尝试修复上个版本打不开投屏的问题
- 升级scrcpy核心到1.9
上个版本没来得及测试，这个版本测了，每次投屏返回的时候，等个2、3秒再打开，基本都能正常显示
不过不知道为啥1.9移植过来后，感觉延迟变高了
## 1.2.0

[优化]
- 控制端强制锁定旋转
- 整体UI优化重构
- 控制页完善
- 控制端主页完善
- 优化扫码页面
- 优化被控端引导页面
- 支持多app分开投屏互不影响（测试阶段）
- 优化虚拟按键
- adb切换为自编译版本

[重要改动]
- scrcpy 核心升级至1.8

[修复]
- 屏幕常亮失效的问题
- 扫码，设备发现无法连接的问题
scrcpy 1.8这个版本移植到android投屏失败几率增加了不少，然后我去scrcpy开源看的时候，又升级到1.9了
我先把这个版本更新到酷安，精力实在是不够

## 1.0.3
- 虚拟按键加上了。
- 设备发现功能加上了。
- 碰一碰投屏速度优化了。
- 列表优化了，以及多adb启动阶段加了提示。
- 有线投屏支持了，被控制端不需要安装打开app。
- 上次大家反馈的支持带端口连接加上了。
- UI优化了一下。

控制界面相关的没有改，大家有问题的反馈给我。

很卡的问题解决不了，scrcpy本就比较消耗cpu的性能，pc端会流畅很多也是因为cpu比手机好。

移植过来后，除了兼容安卓所加的一系列c语言代码，scrcpy开源的代码我是没动解码部分的，如果你比较厉害，可以去pr scrcpy原仓库，
然后我去同步更新就行，因为我本就不是搞音视频方向的，也不懂怎么去优化一个50000 star的项目，这个项目存在到今天，也必然的经过了很多次迭代，
如果有能优化的地方，人家早就改了。

我尽力了调了一下闪退的bug，本来scrcpy就是不支持android端的
移植到安卓端也是做了很多额外的工作，会出现很多crash也不是我想要的结果。

目前对crash的调试结果大概是线程结束资源释放很慢，也就是说本次投屏返回后太快第二次投屏必crash。
打开黑屏的原因是adb打通端口失败，重启app再试即可。

被控制端旋转屏幕，控制端基本必crash，没技术解决。

目前安卓 to 安卓，打开仍然概率黑屏，如果1s左右没有响应大概就是挂了，直接返回重启app，不要自己在那儿挂上几个小时，
最后来跟我抱怨，等了好久好久好久还是没有显示，问我是不是用脚开发的，没有意义。

本来就是用爱发电的项目，大家不必抱有多高的期望，写这个本就是我想搞着玩。

enjoy~

## 1.0.2
- 修复windows端丢失vcruntime140_1.dll的问题
- 修复nfc写入的问题
- 优化扫码连接
## 1.0.1

- UI优化
- 优化设备连接
- 优化扫码连接页面
## 1.0.1

- 修复设备异常连接的问题
- 其他相关优化