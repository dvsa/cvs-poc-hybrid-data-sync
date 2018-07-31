import gql from "graphql-tag";

export const listAllVehicles = gql`
        query GetVehicles {
            getVehicles {
                vin,
                timeStamp,
                vehicle {
                    systemNumber
                    vehicleClass
                    vehicleType
                    chassisType
                    vin
                    manufactureDate
                    testCertificateExpirtyDate
                    vehicleIdentifier
                    previousRegmark
                    registrationDate
                    numberOfAxles
                    make
                    model
                }
            }
        }`;