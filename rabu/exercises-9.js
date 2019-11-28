function cariMean(arr) {
    // CARA I :
    // var jumlah = 0;

    // for (var i in arr) {
    //   jumlah += arr[i];
    // }

    // return Math.round(jumlah / arr.length);

    // CARA II :
    return Math.round((arr.reduce((a, b) => a + b, 0)) / arr.length);
}
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7