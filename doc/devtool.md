### 关键字

##### eval

    每个模块用eval执行，并且存在@sourceUrl，指向源文件

##### source-map

    会生成带有.map的文件，和源文件做一个映射，调试时根据.map文件定位原来代码的位置

##### cheap

    低消耗打包，就是打包的时候map文件不会保存原始代码的列位置信息，只包含行的位置

##### module

    加上在关键字，调试的代码不会被转换，会保留原始代码语法

### devtool（development环境）

#### 1.false

#### 2.eval

    每个模块用eval执行，构建快速，并且都有//@sourceURL，不能正确显示行数

#### 3.eval-source-map

    不会产生.map文件，多一个surceMappingURL，后面跟map文件的base64码，插入的
    bundle文件中。原始代码，没被转换

#### 4.cheap-eval-source-map

    同上，只是没有列信息

#### 5.cheap-module-eval-source-map

#### 6.source-map

#### 7.inline-source-map

    将.map转成base64插入到bundle中

#### 8.hidden-source-map

### 打包后的代码

    将所有生成的代码视为一大块代码，看不到相互分离的模块

### 生成后的代码

    每个模块相互分离，并用模块名进行注释，loader转义后的代码
    
### 原始代码
    每个模块相互分离，并用模块名进行注释，看到转义前的代码

### 无源代码内容


### devtool（正式环境）
false：压缩且一行显示
    
eval：映射到webpack转换过的代码(__webpack_require__(0))，不能正确的显示行数，代码没被压缩（console.error()）
![img.png](img/eval.png)

source-map：原始代码，能看到整个项目的原始代码，因为会生成.map文件所以打包慢

cheap-source-map：同上，但是是babel转换过的代码，无法查看列信息

cheap-eval-source-map：相对于cheap-source-map，打包更快，因为没有.map文件

cheap-module-source-map：相对于cheap-source-map，因为能映射babel文件，能看见源代码

cheap-module-eval-source-map：包含cheap-eval-source-map和cheap-module-source-map

inline-source-map：同source-map，只不过不会生成.map文件，而是以base64（sourceMappingURL）
                    方式插入到bundle文件里，且很大
![img_1.png](img_1.png)

cheap-source-map：同source-map，但是不包含列信息，也不会有loader映射，故debug是转换后的代码
![img_2.png](img_2.png)





    
    

    

    
    