import gql from "graphql-tag";

export const getVehicle = gql`
    query GetVehicle($id: String!) {
        getVehicle(vin: $id) {
        vin,
        timeStamp
        }
    }
`;