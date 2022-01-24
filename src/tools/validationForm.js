
export function validateForm(values) {
    let errors = {};


    if (!values.document) {
        errors.document = "Campo obligatorio*";
    }

    if (!values.name) {
        errors.name = "Campo obligatorio*";
    }

    if (!values.email) {
        errors.email= "Campo obligatorio*";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Correo no válido";
    }

    if (!values.address) {
        errors.address = "Campo obligatorio*";
    }

    if (!values.numberCard) {
        errors.numberCard = "Campo obligatorio*";
    }

    if (!values.cvvCode) {
        errors.cvvCode = "Campo obligatorio*";
    }

    return errors;
}