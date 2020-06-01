import { make } from 'vuex-pathify';
import * as orderActions from './orderActions';
const state = {
  // In the project the order object is initially empty and
  // loaded via a GET call of backend server
  // in the beforeMount() hook of App.vue.
  order: {
    uuid: 'ead1d98d-c62c-4c09-806f-8fad5c38693d',
    id: 1,
    orderTotal: {
      subtotal: {
        number: '100.00',
        currency_code: 'EUR',
        formatted: '100,00 €'
      },
      adjustments: [
        {
          type: 'shipping',
          label: 'Spedizione',
          amount: {
            number: '0.00',
            currency_code: 'EUR',
            formatted: '0,00 €'
          },
          total: {
            number: '0.00',
            currency_code: 'EUR',
            formatted: '0,00 €'
          },
          percentage: null,
          source_id: '3',
          included: false,
          locked: false
        }
      ],
      total: {
        number: '100.00',
        currency_code: 'EUR',
        formatted: '100,00 €'
      }
    },
    orderItems: [
      {
        uuid: '66dda800-0254-4663-af1e-16021e35123d',
        type: 'default',
        id: 50,
        title: 'test',
        quantity: 10,
        totalPrice: {
          number: '10.00',
          currency_code: 'EUR',
          formatted: '100,00 €'
        },
        unitPrice: {
          number: '10.00',
          currency_code: 'EUR',
          formatted: '10,00 €'
        },
        product: {
          type: 'commerce_product--default',
          drupal_internal__product_id: 1,
          title: 'test',
          path: {
            alias: null,
            pid: null,
            langcode: 'it'
          },
          body: {
            value: '<p>test</p>\r\n',
            format: 'basic_html',
            processed: '<p>test</p>',
            summary: ''
          },
          imageUrl:
            '/sites/default/files/2020-05/Schermata%202020-05-29%20alle%2010.26.36.png',
          quote: {
            uuid: '70c40a0d-7edb-4e26-81f7-0a6027b48419',
            id: 12,
            latoLungo: '17.00',
            altezza: '20.00',
            latoCorto: '17.00',
            tipoMisure: 'interne',
            quantita: 10,
            coloreCartone: 'avana',
            tipoCartone: '1onda',
            stampa: '0',
            nomeReferente: 'Nome',
            nomeAzienda: 'Cognome',
            email: 'email@mail.it',
            telefono: '12345678',
            partitaIva: '12345678',
            provincia: 'PR',
            misure: 'cm. 17x17x20 h',
            title: null
          },
          variation: {
            uuid: '8804f1d2-d577-4f99-b8c5-7245bab55b5d',
            price: {
              number: '10.00',
              currency_code: 'EUR',
              formatted: '10,00 €'
            },
            promotion: true
          }
        }
      }
    ],
    shippingWarranty: true,
    couponCode: '',
    promotionDiscount: 0
  }
};

const mutations = make.mutations(state);
const defaultActions = make.actions(state);
const actions = {
  ...defaultActions,
  ...orderActions
};
const getters = make.getters(state);

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
