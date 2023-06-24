
let name = (name) => {
    if (name == null || name == '') {
        return 'Please fill name.'
    }
    return true;
}
let email = (email) => {
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == null || email == '') {
        return 'Please fill the eamil.'
    }
    else if (!regx.test(email)) {
        return 'Please fill valid eamil.'
    }
    return true;
}

let mobile = (mobile) => {
    let regxmobile = /^\d{10}$/;
    if (mobile == null || mobile == '') {
        return 'Please fill mobile.'
    }
    else if (!regxmobile.test(mobile)) {
        return 'Please fill valid mobile'
    }
    return true;
}

let optionValidation = (option, type) => {
    if (option == null || option == '') {
        return `Please select ${type}.`
    }
    return true;
}

let inputValidation = (input, type) => {
    if (input == null || input == '') {
        return `Please fill ${type}.`
    }
    return true;
}
