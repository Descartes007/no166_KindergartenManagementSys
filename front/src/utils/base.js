const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot4023t/",
            name: "springboot4023t",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4023t/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "幼儿园管理系统"
        } 
    }
}
export default base
