var sex="boy";
var echo=function(value){
　　console.log(value)
}
export {sex,echo}  
//通过向大括号中添加sex，echo变量并且export输出，就可以将对应变量值以sex、echo变量标识符形式暴露给其他文件而被读取到
//不能写成export sex这样的方式，如果这样就相当于export "boy",外部文件就获取不到该文件的内部变量sex的值，因为没有对外输出变量接口,只是输出的字符串。