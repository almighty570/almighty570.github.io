
export const getOrderStatus = (statusCode) => {
    const STATUS = {
        0: {
            title: "Pending",
            variation: 'danger'
        },
        1: {
            title: "Shipping",
            variation: 'warning'
        },
        2: {
            title: "Shipped",
            variation: 'info'
        },
        3: {
            title: "Delivered",
            variation: 'success'
        }
    }
    return STATUS[statusCode];
}

export const generateOrderCode = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const navigateObj = (obj, prop) => {
    if (prop.includes('.')) {
        let keys = prop.split('.');
        let val = obj[keys[0]];
        for (let i = 0; i < keys.length; i++) {
            val = val[keys[i]]
        }
        return val;
    } else return obj[prop];
}