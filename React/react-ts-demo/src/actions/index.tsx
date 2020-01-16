// 创建这个应用将要响应的消息类型
import * as constants from '../constants'

export interface IIncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}