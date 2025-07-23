export const CONTRACT_ABI =  [
       
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "state",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "category",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "typeofCourt",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "adminUserName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                }
            ],
            "name": "addCourt",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "courts",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "state",
                    "type": "string"
                },
                {
                    "internalType": "enum Cases.CourtCategory",
                    "name": "category",
                    "type": "uint8"
                },
                {
                    "internalType": "enum Cases.CourtType",
                    "name": "typeofCourt",
                    "type": "uint8"
                },
                {
                    "internalType": "string",
                    "name": "adminUserName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "adminPassword",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "courtId",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "createCase",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    
]


  export enum CourtCategory {
  District,
  High,
  Supreme,
}

export enum CourtType {
  Civil,
  Criminal,
  Family,
  Labour,
  Tribunal,
}

export interface CourtDetails {
  name: string;
  state: string;
  typeofCourt: CourtType;      // e.g., Civil, Criminal
  category: CourtCategory;     // e.g., District, High
  adminUserName: string;
  password: string;
}
