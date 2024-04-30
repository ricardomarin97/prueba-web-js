function bisection(f, x1, x2) {
    const epsilon = 0.0001;
    var y1 = f(x1);
    var y2 = f(x2);

    // If provided with a root, return that root.
    if (y1 === 0) {
        return x1;
    }
    if (y2 === 0) {
        return x2;
    }

    // If there is no sign change in the interval [x1, x2],
    // return null.
    if (y1 * y2 > 0) {
        return null;
    }

    var xMid, yMid;
    var diff = Math.abs(x1 - x2);

    while (diff > epsilon) {
        xMid = (x1 + x2) / 2;
        yMid = f(xMid);

        // If the mid point is a root, return it.
        if (yMid === 0) {
            return xMid;
        }

        // Determine which of the intervals [x1, xMid] and [xMid, x2]
        // has the sign change, and then continue with that interval.
        if (y1 * yMid <= 0) {
            x2 = xMid;
        }
        else {
            x1 = xMid;
        }

        diff = Math.abs(x1 - x2);
    }

    xMid = (x1 + x2) / 2
    return Number(xMid.toFixed(3));
}