"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbUrl = 'xxxxxx';
exports.dbUrl = dbUrl;
function getData() {
    console.log('获取数据库的数据');
    return [
        {
            'title': 'xxxxx'
        },
        {
            'title': 'xxxxx'
        }
    ];
}
exports.getData = getData;
function save() {
    console.log('保存数据成功!');
}
exports.save = save;
