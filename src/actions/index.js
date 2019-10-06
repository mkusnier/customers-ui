
export function getCustomers() {
    return fetch(`customers.json`)
      .then(response => response.json())
}

export function getCustomer(id) {
    return fetch(`../customers.json`)
        .then(response => response.json())
        .then(response => response.find(customer => {return customer.id == id}))
}