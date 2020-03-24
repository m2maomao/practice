"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var db_1 = __importDefault(require("../config/db"));
var pool = mysql_1.default.createPool(db_1.default); // 连接池
var query = function (sql) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (error, connection) {
            if (error) {
                reject(error);
            }
            else {
                connection.query(sql, function (error, results) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(results);
                    }
                    connection.release();
                });
            }
        });
    });
};
exports.default = query;
