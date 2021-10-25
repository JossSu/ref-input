export default {
    /*
     *正则匹配
     */
    checkStr(str, type) {
        switch(type) {
            //AC 規範 6-12位數，英數字 [required]
            case 'ac':
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(str)
            // PW 規範 4位數，英數字 [required]
            case 'ps':
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(str)
            // Captcha 規範 4位數，英數字 [required]
            case 'captcha':
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(str)
        }
    }
}