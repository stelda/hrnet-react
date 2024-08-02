export const validate = (employee) => {
    const errors = {};

    if (!employee.firstName.trim()) {
        errors.firstName = 'First Name is required';
    } else if (!/^[a-zA-ZÀ-ÿ' -]{2,40}$/.test(employee.firstName)) { // First name with optional hyphen and space
        errors.firstName = 'First Name should be at least 2 characters';
    }

    if (!employee.lastName.trim()) {
        errors.lastName = 'Last Name is required';
    } else if (!/^[a-zA-ZÀ-ÿ' -]{2,40}$/.test(employee.lastName)) { // Last name with optional hyphen and space
        errors.lastName = 'Last Name should be at least 2 characters';
    }

    if (!employee.street.trim()) {
        errors.street = 'Street is required';
    } else if (!/^[a-zA-ZÀ-ÿ' -]{2,40}$/.test(employee.street)) { // Street name with optional hyphen and space
        errors.street = 'Street should be at least 2 characters';
    }

    if (!employee.city.trim()) {
        errors.city = 'City is required';
    } else if (!/^[a-zA-ZÀ-ÿ' -]{2,40}$/.test(employee.city)) { // City name with optional hyphen and space
        errors.city = 'City should be at least 2 characters';
    }

    if (!employee.zipCode.trim()) {
        errors.zipCode = 'Zip Code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(employee.zipCode)) { // US Zip Code with optional 4-digit extension 12345-6789
        errors.zipCode = 'Zip Code is invalid';
    }

    return errors;
};