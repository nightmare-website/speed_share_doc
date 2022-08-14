# 常见问题


## MAC端显示文件已损坏

一、系统偏好设置 -> 安全性与隐私 -> 通用 -> 选择“任何来源”
1、显示"任何来源"选项在控制台中执行：

```sh
sudo spctl --master-disable
```

2、不显示"任何来源"选项在控制台中执行：

```sh
sudo spctl --master-enable
```

二、如果选择了任何来源还是提示文件已损坏，命令行输入
```
sudo xattr -r -d com.apple.quarantine
```

例如：
```bash
sudo xattr -r -d com.apple.quarantine  /Applications/WebStorm.app
```

如果不知道具体路径，可以打开应用程序窗口，然后拖拽软件的图片到命令行 就可以了

## 被控制端为什么要安装app?
- 能够方便的查看设备的ip
- 扫码快速投屏
- 局域网广播投屏