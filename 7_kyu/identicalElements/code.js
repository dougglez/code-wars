function duplicateElements(m, n) {
    for (var i = 0; i < m.length; i++) {
      for (var j = 0; j < n.length; j++) {
        if (n[j] === m[i]) {
          return true;
        }
      }
    } return false;
}