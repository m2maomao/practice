"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var query_1 = __importDefault(require("../models/query"));
var router = express_1.default.Router();
var urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
// 拼装一个查询所有数据的mysql，会从三个表中查询所有的字段
var queryAllSQL = "SELECT employee.*, level.level, department.department \n    FROM employee, level, department\n    WHERE\n        employee.levelId = level.id AND\n        employee.departmentId = department.id";
//查询员工
router.get('/getEmployee', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, name, departmentId, conditions, sql, result, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.query, _b = _a.name, name = _b === void 0 ? '' : _b, departmentId = _a.departmentId;
                conditions = "AND employee.name LIKE '%" + name + "%'";
                if (departmentId) { // 如果指定了departmentId那么我们就在查询条件中指定departmentId
                    conditions = conditions + ("AND employee.departmentId=" + departmentId); // 最后将sql拼接
                }
                sql = queryAllSQL + " " + conditions + " ORDER BY employee.id DESC";
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, query_1.default(sql)];
            case 2:
                result = _c.sent();
                result.forEach(function (i) {
                    i.key = i.id; // 在antd里表格需要一个key属性，这里我们把从数据库里查询的结果里每一项增加一个key
                });
                res.json({
                    flag: 0,
                    data: result
                });
                return [3 /*break*/, 4];
            case 3:
                e_1 = _c.sent();
                res.json({
                    flag: 1,
                    msg: e_1.toString()
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// 创建员工
// router.get('/createEmployee', urlencodedParser, async (req, res) => {
//     let { name, departmentId, hiredate, levelId} = req.body;
//     let sql = `INSERT INTO employee (name, departmentId, hiredate, levelId)
//         VALUES ('${name}', ${departmentId}, '${hiredate}', ${levelId})`;
//     try {
//         let result = await query(sql);
//         res.json({
//             flag: 0,
//             data: {
//                 key: result.insertId,
//                 id: result.insertId
//             }
//         })
//     } catch (e) {
//         res.json({
//             flag: 1,
//             msg: e.toString()
//         })
//     }
// });
router.post('/createEmployee', urlencodedParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, departmentId, hiredate, levelId, sql, result, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, departmentId = _a.departmentId, hiredate = _a.hiredate, levelId = _a.levelId;
                sql = "INSERT INTO employee (name, departmentId, hiredate, levelId)\n        VALUES ('" + name + "', " + departmentId + ", '" + hiredate + "', " + levelId + ")";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, query_1.default(sql)];
            case 2:
                result = _b.sent();
                res.json({
                    flag: 0,
                    data: {
                        key: result.insertId,
                        id: result.insertId
                    }
                });
                return [3 /*break*/, 4];
            case 3:
                e_2 = _b.sent();
                res.json({
                    flag: 1,
                    msg: e_2.toString()
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
