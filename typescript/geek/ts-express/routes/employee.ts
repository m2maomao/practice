import express from 'express';
import bodyParser from 'body-parser';
import query from '../models/query';

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// 拼装一个查询所有数据的mysql，会从三个表中查询所有的字段
let queryAllSQL = `SELECT employee.*, level.level, department.department 
    FROM employee, level, department
    WHERE
        employee.levelId = level.id AND
        employee.departmentId = department.id`;
//查询员工
router.get('/getEmployee', async (req,res) => {
    let {name = '', departmentId } = req.query; // 从请求里获取name，departmentId字段
    let conditions = `AND employee.name LIKE '%${name}%'`;// 对name进行模糊查询
    if( departmentId) {// 如果指定了departmentId那么我们就在查询条件中指定departmentId
        conditions = conditions + `AND employee.departmentId=${departmentId}`;// 最后将sql拼接
    }
    let sql = `${queryAllSQL} ${conditions} ORDER BY employee.id DESC`;
    try {
        let result = await query(sql);// 我们使用query发起数据库连接请求，这个会返回一个Promise对象
        result.forEach((i:any) => {
            i.key = i.id // 在antd里表格需要一个key属性，这里我们把从数据库里查询的结果里每一项增加一个key
        })
        res.json({// 然后我们向客户端返回一个查询正确的json
            flag:0,
            data: result
        })
    } catch (e) {
        res.json({
            flag: 1,
            msg: e.toString()
        })
    }
});

// 创建员工
router.get('/createEmployee', urlencodedParser, async (req, res) => {
    let { name, departmentId, hiredate, levelId} = req.body;
    let sql = `INSERT INTO employee (name, departmentId, hiredate, levelId)
        VALUES ('${name}', ${departmentId}, '${hiredate}', ${levelId})`;
    try {
        let result = await query(sql);
        res.json({
            flag: 0,
            data: {
                key: result.insertId,
                id: result.insertId
            }
        })
    } catch (e) {
        res.json({
            flag: 1,
            msg: e.toString()
        })
    }
});

export default router;