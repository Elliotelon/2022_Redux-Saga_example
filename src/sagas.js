import {call, put,takeLatest} from "redux-saga/effects"
import {GET_USERS_FETCH, GET_USERS_SUCCESS} from "./actions"

function usersFetch() {
    console.log(3)
    return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
}

function* workGetUsersFetch() {
    console.log(2)
    const users =yield call(usersFetch)
    console.log(4)
    yield put({type: GET_USERS_SUCCESS, users})
    console.log(6)
}

function* mySaga() {
    console.log(1)
    yield takeLatest(GET_USERS_FETCH, workGetUsersFetch)
    console.log(7)
}

export default mySaga;