export const formatCurrency = (value) => {
    let decimalCount = 2;
    const decimal = ',';
    const thousands = '.';

    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = value < 0 ? "-" : "";

    let i = parseInt(value = Math.abs(Number(value) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return 'R$ ' + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(value - i).toFixed(decimalCount).slice(2) : "");
};