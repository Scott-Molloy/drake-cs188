const uuid = require('uuid');

const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

describe('customer repository', () => {
    let expectedCustomerId,
        expectedCustomer;

    beforeEach(() => {
        expectedCustomerId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';

        expectedCustomer = {
            'customer_id': expectedCustomerId,
            "email": "jason.bradley@drake.edu",
            "first_name": "Jason",
            "last_name": "Bradley"
        };
    });

    describe('selectCustomers', () => {
        it('should return all the customers', () => {
            const actualCustomers = selectCustomers();
            const [actualCustomer] = actualCustomers.rows;

            expect(actualCustomer).toEqual(expectedCustomer);
        });
    });

    describe('selectCustomerByCustomerId', () => {
        it('should return a specific customer by customerId', () => {
            const actualCustomer = selectCustomerByCustomerId(expectedCustomerId);

            expect(actualCustomer).toEqual({
                'customer_id': expectedCustomerId,
                "email": "jason.bradley@drake.edu",
                "first_name": "Jason",
                "last_name": "Bradley"
            });

        });
    });
});