const uuid = require('uuid');

const {
    getAllCustomers,
    getCustomerByCustomerId,
} = require('../../services/customer-service');

const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

jest.mock('../../repositories/customer-repository');

describe('getAllCustomers', () => {
    let expectedCustomerID;

    beforeEach(() => {
        expectedCustomerId = uuid.v4();
        expectedCustomer = {
            customerId: expectedCustomerId
        }

        selectCustomers.mockReturnValue({
            rows: [{
                'customer_id': expectedCustomerId
            }]
        });

        selectCustomerByCustomerId.mockReturnValue({
            'customer_id': expectedCustomerId
        });
    });

    it('should get all the customers', () => {
        const actualCustomers = getAllCustomers();

        expect(selectCustomers).toHaveBeenCalledTimes(1);

        expect(actualCustomers).toEqual([
            expectedCustomer
        ]);
    });

    it('should get a customer by a specific customerId', () => {
        const actualCustomer = getCustomerByCustomerId(expectedCustomerId);

        expect(selectCustomerByCustomerId).toHaveBeenCalledTimes(1);
        expect(selectCustomerByCustomerId).toHaveBeenCalledWith(expectedCustomerId);

        expect(actualCustomer).toEqual(expectedCustomer);
    });
});
