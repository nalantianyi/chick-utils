/**
 * Created by nalantianyi on 2017/6/7.
 * 浏览器操作cookie基础封装
 */
export default {
    //获取单挑cookie记录
    get(n){
        let m = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"));
        return !m ? "" : decodeURIComponent(m[2]);
    },
    //设置单挑cookie记录
    set(name, value, domain, path, hour){
        let expire = new Date();
        expire.setTime(expire.getTime() + (hour ? 3600000 * hour : 30 * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + ";" + "expires=" + expire.toGMTString() + ";path=" + (path ? path : '/') + ";" + (domain ? ("domain=" + domain + ";") : "");

    },
    //删除单条cookie记录
    del(name, domain, path){
        document.cookie = name + "=;expires=Mon,26 Jul 1997 05:00:00 GMT;path=" + (path ? path : "/") + ";" + (domain ? ("domain=" + domain + ";") : "");
    },
    //清除document.cookie
    clear(){
        let rs = document.cookie.match(new RegExp("([^;][^;]*)(?=(=[^;]*)(;|$))", "gi"));
        for (let i in rs) {
            document.cookie = rs[i] + "=;expires=Mon,26 Jul 1997 05:00:00 GMT;path=/;";
        }
    }
};
