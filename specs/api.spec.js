"use strict";

const axios = require('axios');

const goodUser = {
    "userName": "duuGGGi096",
    "password": "Azhn9!ess"
};

const badUser = {
    "userName": "xyz",
    "password": "xyz!ess"
};

describe('API тесты на сервис bookstore', () => {

    describe('Успешное создание пользователя и генерация токена авторизации.', () => {


        it('Создание пользователя успешно', async () => {
            const config = {
                method: 'post',
                url: 'https://bookstore.demoqa.com/Account/v1/User',
                data: goodUser,
                headers: {
                    'accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive'
                },
            };

            const resp = await axios(config);
            let uiid = resp.data.userID;
            console.log(uiid);
            expect(resp.status).toEqual(201);
        });

        it('Генерация токена успешно', async () => {
            const config = {
                method: 'post',
                url: 'https://bookstore.demoqa.com/Account/v1/GenerateToken',
                data: goodUser,
                headers: {
                    'accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive'
                },
            };
            const resp = await axios(config);
            let tkn = resp.data.token;
            expect(resp.status).toEqual(200);
            expect(resp.data.status).toEqual('Success')
            expect(resp.data.result).toEqual('User authorized successfully.')
            console.log(tkn);

        });
    });

    describe('Ошибки при создании пользователя и генерации токена авторизации', () => {

        it('Создание пользователя с ошибкой, логин уже используется', async () => {
            const config = {
                method: 'post',
                url: 'https://bookstore.demoqa.com/Account/v1/User',
                data: goodUser,
                headers: {
                    'accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive'
                },
            };
            try {
                const resp = await axios(config);
            } catch (e) {
                expect(e.response.status).toEqual(406);
            }
        });

        it('Создание пользователя c ошибкой, пароль не подходит', async () => {
            const config = {
                method: 'post',
                url: 'https://bookstore.demoqa.com/Account/v1/User',
                data: badUser,
                headers: {
                    'accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive'
                },
            };
            try {
                const resp = await axios(config);
            } catch (e) {
                expect(e.response.data.code).toEqual('1300');
            }
        });

        it('Генерация токена c ошибкой', async () => {
            const config = {
                method: 'post',
                url: 'https://bookstore.demoqa.com/Account/v1/GenerateToken',
                data: badUser,
                headers: {
                    'accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive'
                },
            };
            const resp = await axios(config);
            expect(resp.status).toEqual(200);
            expect(resp.data.status).toEqual('Failed')
            expect(resp.data.result).toEqual('User authorization failed.')
        });
    });
});

