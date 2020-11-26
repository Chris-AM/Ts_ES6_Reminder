"use strict";
function activate(who, when, what = 'batisignal') {
    if (when) {
        console.log(`${who} activated the ${what} in the ${when}`);
    }
    else {
        console.log(`${who} activated the ${what}`);
    }
}
activate('gordon', 'midnight');
