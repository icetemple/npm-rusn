

type Forms = [string, string, string] | string


export const rusNGetText = (number: number, forms: Forms): string => {
    if (typeof forms === 'string') {
        return forms
    }

    let [first, second, third] = forms;

    let result_from_100 = number % 100;
    if (result_from_100 < 10 || result_from_100 > 20) {
        let result_from_10 = number % 10;
        if (result_from_10 == 1) {
            return first
        }

        if (result_from_10 > 1 && result_from_10 < 5) {
            return second
        }
    }

    return third
};


export default {
    rusNGetText
}
