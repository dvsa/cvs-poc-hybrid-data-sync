import gql from "graphql-tag";

export const query = gql`
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
        }, 
        techRecord {
            bodyModel,
            bodyMake,
            bodyType,
            chassisMake,
            chassisModel,
            brakeCode,
            grossDesignWeight,
            grossGbWeight,
            grossKerbWeight,
            grossLadenWeight,
            retarderBrake1,
            retarderBrake2,
            seatsLowerDeck,
            seatsUpperDesk,
            sequenceNumber,
            speedLimiterMarker,
            speedRestriction,
            standingCapacity,
            tachoExemptMarker,
            unladenWeight,
            dispensations,
            remarks,
            serviceA,
            secA,
            parkingA,
            serviceB,
            secB,
            parkingB,
            brakeData {
                secondary,
                parking,
                brakeDataCode,
                service
            },
            axles {
                axleNumber,
                weights {
                gbWeight,
                designWeight
                },
                tyres {
                tyreCode,
                tyreSize,
                plyRating,
                fitmentCode,
                dLoadIndex,
                sLoadIndex,
                loadIndex,
                speedCatSymbol
                }
            }
        },
        operator {
            operatorLicenceNumber,
            operatorLicenceStatus,
            operatorName
        },
        testHistory {
            location,
            testDate,
            testType,
            vehicleIdentifierAtTest,
            testResult,
            testCertificateExpiryDateAtTest,
            numberOfDefectsAtTest,
            numberOfAdvisoryDefectsAtTest
        },
        encounter {
            prohibitionNotice,
            prohibitionOutstanding
            }
        }
    }
`;