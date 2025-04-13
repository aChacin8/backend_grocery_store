/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('users').del();
  await knex('users').insert([
    { id_users: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: 'hashedpassword1', address: '123 Maple St', city: 'New York', state: 'NY', postal_code: '10001', phone: '555-1234', active: true },
    { id_users: 2, first_name: 'Alice', last_name: 'Smith', email: 'alice@example.com', password: 'hashedpassword2', address: '456 Oak Ave', city: 'Los Angeles', state: 'CA', postal_code: '90001', phone: '555-5678', active: true },
    { id_users: 3, first_name: 'Bob', last_name: 'Johnson', email: 'bob@example.com', password: 'hashedpassword3', address: '789 Pine Rd', city: 'Chicago', state: 'IL', postal_code: '60601', phone: '555-9012', active: true },
    { id_users: 4, first_name: 'Emily', last_name: 'Brown', email: 'emily@example.com', password: 'hashedpassword4', address: '246 Elm St', city: 'New York', state: 'NY', postal_code: '10002', phone: '555-3456', active: true },
    { id_users: 5, first_name: 'Michael', last_name: 'Davis', email: 'michael@example.com', password: 'hashedpassword5', address: '135 Cedar Blvd', city: 'Houston', state: 'TX', postal_code: '77001', phone: '555-7890', active: true }
  ]);
};
