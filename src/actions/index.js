
export function getCustomers() {
    return fetch(`https://customers-api-253714.appspot.com/getCustomers`)
      .then(response => response.json())
}

export function getCustomer(id) {
    return fetch(`https://customers-api-253714.appspot.com/getCustomer?id=${id}`)
        .then(response => response.json())
}