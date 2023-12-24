function calc(){
    let euro = euroField.value;
    result = euro * 1.10;
    usd.value = result.toFixed(2).replace('.', ',');
}