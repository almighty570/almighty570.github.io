import Swal from "sweetalert2";

export const Alert = function (title = "", message, type = "success", callback) {
    Swal.fire({
        title,
        text: message,
        icon: type
    }).then(() => {
        if(callback) callback();
    });
}