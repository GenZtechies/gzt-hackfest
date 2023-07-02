class ArrayFns {
    divideArrayIntoTwo<T>(array: T[]): [T[], T[]] {
        const half = Math.ceil(array.length / 2);
        const firstHalf = array.slice(0, half);
        const secondHalf = array.slice(-half);
        return [firstHalf, secondHalf];
    }
}

const arrayFns = new ArrayFns();

export default arrayFns;
