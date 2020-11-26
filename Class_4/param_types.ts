
function activate(who: string,
  when?: string,
  what: string = 'batisignal') {
  if (when) {
    console.log(`${who} activated the ${what} in the ${when}`)
  } else {
    console.log(`${who} activated the ${what}`)
  }
}

activate('gordon', 'midnight')
