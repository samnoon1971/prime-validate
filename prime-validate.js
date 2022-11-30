








function FermatFactors(n)
{

    // since fermat's factorization applicable
    // for odd positive integers only
    if(n <= 0 || (n % 2) === 0)
    {
        return false;
    }


    let a = Math.ceil(Math.sqrt(n)) ;

    // if n is a perfect root,
    // then both its square roots are its factors
    if(a * a === n)
    {
        return false;
    }
    let b = 0;
    while(true)
    {
        let b1 = a * a - n ;
        b = parseInt(Math.sqrt(b1), 10);

        if(b * b === b1)
            break;
        else
            a += 1;
    }
    let firstOdd = a - b, secondOdd = a + b;
    return (firstOdd === 1 || secondOdd === 1);

}

module.exports = FermatFactors;
