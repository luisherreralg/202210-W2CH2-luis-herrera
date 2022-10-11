export const strictEquals = (a, b) => {
    if (isNaN(a) && isNaN(b)) {
        return false;
    }

    // 0/0 = NaN
    if (isNaN(a / b)) {
        return true;
    }

    const boleano = Object.is(a, b);
    return boleano;
};
