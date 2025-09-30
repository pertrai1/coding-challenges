/**
 * The knows API is defined in the parent class Relation.
 * knows(a: number, b: number): boolean {
 *     ...
 * };
 */

var solution = function(knows: any) {

    return function(n: number): number {
        let candidate = 0;
        for (let i = 1; i < n; i++) {
            if (knows(candidate, i)) {
                candidate = i;
            }
        }

        for (let i = 0; i < n; i++) {
            if (i !== candidate) {
                if (!knows(i, candidate) || knows(candidate, i)) {
                    return -1;
                }
            }
        }

        return candidate;
    };
};