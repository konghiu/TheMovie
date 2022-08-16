import { createServer, Model } from 'miragejs'
import listAccountUsers from './listAccountUsers.json'

export const setupServerAPI = () => {
     createServer({
          models: {
               account: Model
          },
          routes() {
               this.namespace = 'api'
               this.get("accounts", (schema) => {
                    return schema.accounts.all();
               })
               this.post("register-account", (schema, request) => {
                    const payload = JSON.parse(request.requestBody);
                    return schema.accounts.create(payload);
               })
               this.post("update-account", (schema, request) => {
                    const payload = JSON.parse(request.requestBody);
                    const currentAccount = schema.accounts.find(payload.id);
                    currentAccount.update(payload);
               })
               this.post("receipts/add-receipt", (schema, request) => {
                    const payload = JSON.parse(request.requestBody);
                    const { receipt, id } = payload
                    const receipts = schema.accounts.find(Number(id)).attrs.transactionHistory;
                    return [...receipts, receipt]
               })
               this.delete("receipts/remove-receipt/:id", (schema, request) => {
                    console.log(request.requestBody)
                    const receiptID = Number(request.params.id);
                    const userID = Number(request.requestBody);
                    const receipts = schema.accounts.find(userID).attrs.transactionHistory;
                    return receipts.filter(item => Number(item.ticketID) !== receiptID)
               })
          },
          seeds(server) {
               listAccountUsers.forEach(item => {
                    return server.create("account", item);
               })
          },
     })
}  



