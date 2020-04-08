
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