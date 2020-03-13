# Test - Dito
> Projeto criado para o processo seletivo da empresa Dito.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3001
npm run local

# serve for production
npm run start
```
## Endpoint
``` bash
# Base URL
http://localhost:3001/api/v1

# Get Timelines
# Busca uma timeline de compras a partir dos eventos disponíveis no endpoint: https://storage.googleapis.com/dito-questions/events.json.
Metodo: GET
http://localhost:3001/api/v1/timeline

# Get Collector Search
# Busca os eventos a partir de parte do nome do evento
Metodo: GET
http://localhost:3001/api/v1/collector/search?event=bu
- mglt: String contendo o evento a ser pesquisado, total ou parcial.

# Post Collector
# Cria um objeto do tipo Collector com os atributos "event" e "timestamp"
Metodo: POST
http://localhost:3001/api/v1/collector
data: {
  event: String contendo o nome do evento. Ex: "buy",
  timestamp: String contendo data e hora do evento. Ex: "2016-09-22T13:57:31.2311892-04:00"
}
```