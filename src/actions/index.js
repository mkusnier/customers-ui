
export function getCustomers() {
    return fetch(`https://customers-api-253714.appspot.com/getCustomers`)
      .then(response => response.json())
}

export function getCustomer(id) {
    return fetch(`https://customers-api-253714.appspot.com/getCustomer?id=${id}`)
        .then(response => {
            if(response.status === 200) 
                return response.json();
            else if(response.status === 204)
                throw new Error('Customer not found');
            else 
                throw new Error('Error occured while fetching customer details')
        })
}