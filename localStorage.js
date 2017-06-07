/**
 * Created by nalantianyi on 2017/6/7.
 * localstorage基础封装
 */

let rkey = /^[0-9A-Za-z_@-]*$/;
let store;
//转换对象
function init() {
    if (typeof store === 'undefined') {
        store = window['localStorage'];
    }
    return true;
}
//判断localStore的key是否合法
function isValidKey(key) {
    if (typeof key !== 'string') {
        return false;
    }
    return rkey.test(key);
}

export default {
    set(key, value){
        let success = false;
        if (isValidKey(key) && init()) {
            try {
                value += '';
                store.setItem(key, value);
                success = true;
            }
            catch (e) {

            }
        }
        return success;
    },
    get(key){
        if (isValidKey(key) && init()) {
            try {
                return store.getItem(key);
            }
            catch (e) {

            }

        }
    },
    remove(key){
        if (isValidKey(key) && init()) {
            try {
                return store.removeItem(key);
            }
            catch (e) {
            }
        }
        return false;
    },
    clear(){
        if (init()) {
            try {
                for (let key in store) {
                    store.removeItem(key);
                }
            }
            catch (e) {

            }
        }
        return false;
    }
};