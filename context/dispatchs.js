import { TYPE_ADD_SEND_MESSAGE_IN_TRACE,
    TRACE_RESULT_SEND, TRACE_STATUS_SEND,
    TYPE_UPDATE_SEND_MESSAGE_IN_TRACE, } from "./contextAPI/types"

export function SendMessageTrace(props, json) {
    props.dispatch({
        type: TYPE_ADD_SEND_MESSAGE_IN_TRACE,
        message: {
            uuid: GetUUID(json),
            result: TRACE_RESULT_SEND,
            status: TRACE_STATUS_SEND,
            json: json,
        }
    })
}

export function SendMessageTraceUpdate(props, uuid, result, status) {
    props.dispatch({
        type: TYPE_UPDATE_SEND_MESSAGE_IN_TRACE,
        message: {
            uuid: uuid,
            result: result,
            status: status,
        }
    })
}

const DEFAULT_USE_LOGGER = true

export function Logger(props, type, log) {
    if (DEFAULT_USE_LOGGER) {
        props.dispatch({
            type: type,
            log: log
        })
    }
}