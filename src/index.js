
export function getPercents(percent, number) {
    if (isNaN(percent) || isNaN(number)) {
        return "One of arguments is not a number"
    }
    if (percent < 0) {
        return 0
    }
	return number / 100 * percent;
}
console.log(getPercents(-5, 100))