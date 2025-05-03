export const isValidData = (email, password, fullName) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)
    
    if (!email) return "Email is required"
    if (!isEmailValid) return "Please enter a valid email address"
    if (!password) return "Password is required"
    if (!isPasswordValid) return "Please enter a valid email address"
    
    // Only validate fullName if it's not null (sign-up case)
    if (fullName !== null) {
        const isFullNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullName)
        if (!isFullNameValid) return "Please enter a valid full name"
        if (fullName.trim().length < 2) return "Full name must be at least 2 characters long"
    }

    return null
}