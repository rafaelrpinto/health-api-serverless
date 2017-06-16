# Overview
AWS Lambda / Node.js api that searches a DynamoDB database of health facilities based on Brazilian government data. The api accesses the database created by [health-dynamo-db](https://github.com/rafaelrpinto/health-dynamo-db).

This project was built using Node 6.10.

A similar API that uses Redis instead of DynamoDB can be found [here](https://github.com/rafaelrpinto/health-api).

## Routes

- GET /nearest/{long}/{lat}

Retrieves nearest health facilities based on the provided coordinates.

```javascript
[
  {
    "hashKey": "432040",
    "geoJson": "{\"type\":\"POINT\",\"coordinates\":[\"-43.26089\",\"-22.92408\"]}",
    "services": [
      "SERVICO DE DIAGNOSTICO POR IMAGEM",
      "SERVICO DE FISIOTERAPIA"
    ],
    "ibge": "330455",
    "openingHours": "ATENDIMENTOS NOS TURNOS DA MANHA E A TARDE",
    "businessName": "CENTRO ORTOPEDICO GRAJAU LTDA",
    "name": "CENTRO ORTOPEDICO GRAJAU",
    "state": "RJ",
    "city": "RIO DE JANEIRO",
    "neighborhood": "GRAJAU",
    "longitude": "-43.26089",
    "geohash": "43204095853209369",
    "facilityId": "3521125",
    "latitude": "-22.92408",
    "postalCode": "20561206",
    "phone": "N/A",
    "type": "CLINICA/CENTRO DE ESPECIALIDADE",
    "street": "RUA BORDA DO MATO",
    "addressNumber": "100"
  },
  {
    "hashKey": "432042",
    "geoJson": "{\"type\":\"POINT\",\"coordinates\":[\"-43.24864\",\"-22.93962\"]}",
    "services": [
      "SERVICO DE ATENCAO CARDIOVASCULAR / CARDIOLOGIA",
      "SERVICO DE DIAGNOSTICO POR IMAGEM",
      "SERVICO DE DIAGNOSTICO POR METODOS GRAFICOS DINAMICOS"
    ],
    "ibge": "330455",
    "openingHours": "ATENDIMENTOS NOS TURNOS DA MANHA E A TARDE",
    "businessName": "VOTICOR SERVICOS MEDICOS LTDA",
    "name": "VOTICOR SERVICOS MEDICOS LTDA",
    "state": "RJ",
    "city": "RIO DE JANEIRO",
    "neighborhood": "TIJUCA",
    "longitude": "-43.24864",
    "geohash": "43204217948206637",
    "facilityId": "3503496",
    "latitude": "-22.93962",
    "postalCode": "20530001",
    "phone": "21 22383001",
    "type": "CLINICA/CENTRO DE ESPECIALIDADE",
    "street": "RUA CONDE DE BONFIM",
    "addressNumber": "1033"
  },
  ...
```
