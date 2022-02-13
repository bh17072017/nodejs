exports.baseService =   (n, a1, b2) => {
    let steps = 0;
    try {
        if (a1.length == b2.length && 1 <= n && Math.max(...a1) <= 5000 && Math.max(...b2) <= 5000) {
            let min = Math.min(...a1);
            // console.log('minimum value', min)
            for (i = 0; i < n; i++) {
                if (a1[i] != min) {
                    // console.log("incoming element ", a1[i])
                    let loopFlag = true;
                    let decreaseValue = a1[i];
                    while (loopFlag) {
                        let currentValue = (decreaseValue - b2[i]);
                        if (currentValue > -1) {
                            steps = steps + 1;
                            if (currentValue == min) {
                                loopFlag = false;
                            } else {
                                decreaseValue = decreaseValue - b2[i];
                            }
                            // console.log("check2 ", a1[i], b2[i], currentValue, loopFlag)
                        } else {
                            steps = -1;
                            loopFlag = false;
                        }
                    }
                }
            }
            return steps;
        } else {
            throw Error('Somthing went wrong!');
        }
    } catch (error) {
        throw Error('Somthing went wrong!');
    }
}