import toast from "react-hot-toast";

export const ageValidation = ({ value, showErrorToast = true }) => {
    if (value?.toString()?.startsWith('0')) {
        if (showErrorToast) {
            toast.dismiss();
            toast.error("Age can not start with 0");
        }
        return false;
    }
    if (value < 0 || value > 32) {
        if (showErrorToast) {
            toast.dismiss();
            toast.error("Age must be less than 32");
        }
        return false;
    }
    return true;
};

export const phoneNumberValidation = ({ value, showErrorToast = true }) => {
    if (value?.toString()?.startsWith('0')) {
        if (showErrorToast) {
            toast.dismiss();
            toast.error("Phone number can not start with 0");
        }
        return false;
    }
    if (value?.toString()?.length > 10) {
        if (showErrorToast) {
            toast.dismiss();
            toast.error("Phone number must be 10 digits");
        }
        return false;
    }
    return true;
};