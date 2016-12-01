function tryCode(indications) {
    // TODO : indications are null or a 3-digits array.

    if (!indications || indications === null) {
        arrayResult = [5, 5, 5];
        return arrayResult;
    }

    for (i = 0; i < indications.length; i++) {
        var val = arrayResult[i];
        if (indications[i] === 0) {
            arrayResult[i] = arrayResult[i];
        } else if (indications[i] > 0) {
            arrayResult[i] = val + 1;
        } else if (indications[i] < 0) {
            arrayResult[i] = val - 1;
        }
    }

    return arrayResult;
}