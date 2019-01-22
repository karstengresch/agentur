export const typeDefs = gql`
    type Fact {
        id: ID
        
    }
    
    type ContinuousInformation {
        
    }

    type Query {
        users: [User]
    }
`